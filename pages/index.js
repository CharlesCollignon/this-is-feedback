import { useAuth } from '@/lib/auth'
import Head from 'next/head'

import { Button, Heading, Text, Code } from '@chakra-ui/core'


const Home = () => {
  const auth = useAuth()

  return (
    <div className="container">
      <Head>
        <title>This is Feedback</title>
      </Head>

      <main>
        <Heading>This is Feedback</Heading>
        <Text>
          Current user: <Code>auth.user ? auth.user.email</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign in with GH</Button>
        )}
      </main>
    </div>
  )
}

export default Home;
