import Layout from '../components/Layout'
import Chat, { ChatProvider } from '../components/Chat'

export default function Home() {

  return (
    <Layout title="Chat">
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </Layout>
  )
}
