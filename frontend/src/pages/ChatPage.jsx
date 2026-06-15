import React from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const ChatPage = () => {
  return (
    <div>
      chat page
      <header>
        <Show when="signed-out">
          <SignInButton mode='modal' />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </div>
  )
}

export default ChatPage
