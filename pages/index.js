import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useEffect } from 'react';
// import twilio from 'twilio';




export const getStaticProps = async () => {

  const res = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
  const data = await res.json();

  const accountSid = process.env.TWILIO_ACCT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
        body: 'tell me if you get this',
        to: '+16475378775',
        from: '+12163696199',
        
    })
    .then(message => console.log(message.sid));

  return{
    props: {users: data.items}
    
  }
  
}



export default function Home({ users }) {
  console.log(users)

  
  return (
    <div className={styles.container}>

      <Head>
        <title>Notifi</title>
        <meta name="description" content="A stupendous app to notify winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Link href="/api/auth/login">Login</Link>

      {/* trying to map out the data from scorebot */}

      {users.map(user => (
        <PlayerRow 
          key= {user.id}
          rank={user.rank}
          name = {user.player.name}
          score={user.score}
        />
))}

      </main>

      
    </div>
    
  )
  
}

