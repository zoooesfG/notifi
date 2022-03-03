import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import React, { useEffect } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Box, Link, Heading } from 'theme-ui';


export const getStaticProps = async () => {
  //pull Scorebot info
  const res = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
  const data = await res.json();
//   const firebaseRes = await fetch('/api/sms', {
//     method:"GET",
    
// })
  // return Scorebot data
  return{
    props: {leaderboardData: data.items}
    
  }

}



export default withPageAuthRequired(function Home({ leaderboardData }) {

  
  return (
    <Box>

      <Head>
        <title>Notifi</title>
        <meta name="description" content="A stupendous app to notify winners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{
          minHeight: "100vh",
          padding: "4rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(/img/blueWave.PNG)"
      }}>
      
      <Link href="/api/auth/logout" sx={{
        color: "white !important",
        textAlign: "right",
        width:"70vw",
        fontFamily:"Roboto"
      }}>Logout</Link>

      <Box sx={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          backgroundColor:"rgba(177, 243, 254, 0.8)",
          borderRadius:"20px",
          padding: "2em",
          }}>
          <Heading as="h1" sx={{
            textAlign: "center",
            fontSize: "3em",
            fontWeight: "200",
          }}>Leaderboard Results</Heading>
      {leaderboardData.map(entry => (
        <PlayerRow 
          key= {entry.id}
          rank={entry.rank}
          name = {entry.player.name}
          id = {entry.player.id}
        />
))}</Box>

      </Box>

      
    </Box>
    
  )
  
}
)
