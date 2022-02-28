// import { Box, h2 } from "theme-ui"
// import twilio from 'twilio'

import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer, Button, StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'





const PlayerRow = ({id, rank, name})=>{
    const sendText = async () =>{

        console.log(id)

        // TODO: send POST request to your sms endpoint w/ player id
        const res = await fetch('/api/sms', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })
        // const player = await fetch(`https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/players/${id}`)
        // const data =  await res.json()
        
    }
    return (
        <div>
        <section className={styles.row}>
            <h2>{rank}</h2>
            <h2>{name}</h2>
            <Spacer />
            <Button size='sm' onClick={sendText}>Send Text</Button>
        </section>
        </div>
    )
}

export default PlayerRow
