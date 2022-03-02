import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
export const getStaticProps = async () => {

  const res = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
  const data = await res.json();
  // console.log(data)

  return{
    props: {leaderboardData: data.items}
    
  }
  
}



export default withPageAuthRequired(function Home({ leaderboardData }) {

  
  return (
    <div className={styles.container}>

      <Head>
        <title>Notifi</title>
        <meta name="description" content="A stupendous app to notify winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Link className={styles.logout} href="/api/auth/logout">Logout</Link>

      {/* trying to map out the data from scorebot */}
      <div 
        className={styles.box}>
          <h1>Leaderboard Results</h1>
      {leaderboardData.map(entry => (
        <PlayerRow 
          key= {entry.id}
          rank={entry.rank}
          name = {entry.player.name}
          id = {entry.player.id}
        />
))}</div>

      </main>

      
    </div>
    
  )
  
}
)
