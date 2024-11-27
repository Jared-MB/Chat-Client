import { useState } from 'react'
import { useSocket } from './core/hooks/useSocket'

function App() {

  const { status, sendMessage, response } = useSocket('message')

  const [message, setMessage] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage(message)
  }

  return (
    <div>
      {status}
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
      {response}
    </div>
  )
}

export default App
