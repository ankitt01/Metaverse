import Head from 'next/head'

import Login from '../components/Login'

export default function Home() {
  const isAuthenticated = false;

  if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the Metaverse</h1>
    </div>
  )
}
