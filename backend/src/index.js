import express from "express"
import "dotenv/config"
import cors from "cors"
import { connectDB } from "./lib/db.js"
import { clerkMiddleware } from "@clerk/express"
import fs from "fs";
import path from "path";
import job from "./lib/cron.js"
import clerkWebhook from "./webhooks/clerk.webhook.js"

const PORT = process.env.PORT || 3000
const publicDir = path.join(process.cwd(), "public");
app.use("/api/webhooks/clerk", express.raw({ type: "application/json" }), clerkWebhook);
const app = express()
app.use(express.json());
app.use(clerkMiddleware())
app.use(cors({ origin:process.env.FRONTEND_URL,credentials:true }));

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});


// if the public directory exists, serve the static files
// this is for the production build
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server is up and running on PORT:", PORT);

 if (process.env.NODE_ENV === "production") job.start();
});