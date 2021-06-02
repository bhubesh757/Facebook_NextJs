import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';


export default function Home({session}) {
  if(!session)  return <Login></Login>;
  
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header></Header>
      <main className='flex bg-gray-50'>
      {/* sidebar */}
      <Sidebar></Sidebar>
      {/* Feed  */}
      <Feed></Feed>
      {/* widgets  */}
      <Widgets></Widgets>
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  // To get the user

  const session = await getSession(context);

  return {
    props : {
      session,
    },
  };
}
