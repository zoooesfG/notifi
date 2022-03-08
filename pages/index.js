import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Box, Link, Heading, Image } from 'theme-ui';

// export const getStaticProps = async () => {
//   //pull Scorebot info
//   const res = await fetch('https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50');
//   const data = await res.json();

//   // return Scorebot data
//   return{
//     props: {leaderboardData: data.items}
    
//   }

// }



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
          backgroundColor:"#98e2ff",
          backgroundImage: "url(/img/plane.png)"
      }}>
      
      <Link href="/api/auth/logout" sx={{
        color: "white",
        position: "absolute",
        top:"1em",
        right:"1em",
        fontFamily:"Roboto",
        "&:hover":{
          color:"#764ea7"
        }
      }}>Logout</Link>

          <Image src="./img/leaderboard.png" alt="Leaderboard" sx={{marginBottom:"3em"}}/>
      <Box sx={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          background: "#98e2ff",
          boxShadow:  "11px 11px 22px #93dbf7, -11px -11px 22px #9de9ff",
          padding: "2em",
          borderRadius:"10px"
          }}>
      {leaderboardData.map(entry => (
        <PlayerRow
          key= {entry.id}
          rank={entry.rank}
          name = {entry.player.name}
          id = {entry.player.id}
          sent = {entry.textSent}
        />
))}</Box>

      </Box>

      
    </Box>
    
  )
  
}
)
