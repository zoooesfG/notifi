import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useEffect } from 'react';
// import { setRevalidateHeaders } from 'next/dist/server/send-payload';
// import { useUser } from "../hooks/scorebot"
// import useSWR from "swr"

export const getStaticProps = async () => {
  const res = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
  const data = await res.json();

  return{
    props: {users: data.items}
  }
}

export default function Home({ users }) {
  // useEffect(()=>{
  //   fetch("api/tempURL")
  //   .then (res =>{console.log(res)})
    // .then((data)=>{
    //   setData(data)
    // })
    
  // },[])
  // const { entries } = useUser(id)
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
      {/* <div> */}
      {users.map(user => {
        <div key={user.id}>
          <h2>{ user.id }</h2>
          <h2>{ user.rank }</h2>
        </div>
})}
      {/* </div> */}
      </main>

      
    </div>
  )
}

