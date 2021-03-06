import Head from 'next/head'
import PlayerRow from '../components/PlayerRow'
import styles from '../styles/Home.module.css'
import { Stack, HStack, VStack, Box, StackDivider } from '@chakra-ui/react'
// import { Link } from 'theme-ui';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Notifi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <a href="/api/auth/login">Login</a>
      <PlayerRow/>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <Box h='40px' bg='yellow.200'>
          1 
        </Box>
        <Box h='40px' w='50vw' bg='tomato'>
          2
        </Box>
        <Box h='40px' bg='pink.100'>
          3
        </Box>
      </VStack>
      </main>

      
    </div>
  )
}
