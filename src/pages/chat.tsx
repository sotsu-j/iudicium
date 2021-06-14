import Layout from '../components/Layout__'
import Chat, { ChatProvider } from '../components/Chat__'

export default function Home() {

  return (
    <Layout title="Chat">
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </Layout>
  )
}
