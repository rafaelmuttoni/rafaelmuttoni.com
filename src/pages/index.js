import Layout from 'components/Layout'
import Greetings from 'components/Greetings'
import Projects from 'components/Projects'

export default function Home() {
  return (
    <Layout>
      <Greetings />
      <Projects />
    </Layout>
  )
}
