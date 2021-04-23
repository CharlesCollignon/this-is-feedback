import { useAuth } from '../lib/auth'


const Home = () => {
  const auth = useAuth()

  return (
    <div>
      <main>
        <h1>This is Feedback</h1>

        <p>
          Current user: <code>auth.user ? auth.user.email</code>
        </p>
        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        ) : (
          <button onClick={(e) => auth.signinWithGitHub()}>Sign in with GH</button>
        )}
      </main>
    </div>
  )
}

export default Home;
