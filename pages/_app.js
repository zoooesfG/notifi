// pages/_app.js
import React, { useEffect, useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
import useSWR from 'swr';

export default function App({ Component, pageProps }) {


  // const fetcher = (...args) => fetch(...args).then((res) => res.json())
  

  //   const { data, error } = useSWR('/api/scorebot', fetcher)
  
  //   if (error) return <div>Failed to load</div>
  //   if (!data) return
  //     <div>Loading...</div>
  
  //   return (
  //     <UserProvider>
  //         <ThemeProvider theme={theme}>
  //           <Component {...pageProps}/>
  //           </ThemeProvider>
  //     </UserProvider>
  //   );





  const [isLoading, setLoading] = useState(true)
  const [theData, setData] = useState(null)

  useEffect(() => { fetchData() },[])

  const fetchData = async () =>{
    const response = await fetch("/api/scorebot")
    const data = await response.json()
    setData (data.items)
    setLoading(false)
  }

  if(isLoading){ return( <div>Loading...</div> )}
  if (!theData) return <p>no data</p>
  else{
  return (
    <UserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} leaderboardData={theData} />
          </ThemeProvider>
    </UserProvider>
  );
}
}
