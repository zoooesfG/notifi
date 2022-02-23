import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(()=>{
    fetch("api/tempURL").
    then (res =>{console.log(res)})
  })

  return (
    <div className={styles.container}>

      <Head>
        <title>Notifi</title>
        <meta name="description" content="A stupendous app to notify winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Link href="/api/auth/login">Login</Link>
      <PlayerRow/>
      
      </main>

      
    </div>
  )
}
