// import { Box, h2 } from "theme-ui"
// import twilio from 'twilio'

import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer, Button, StylesProvider } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// queries
// const q = query(colRef, where("name", "==", "Zoe F"), orderBy('createdAt'))
// realtime collection data
// onSnapshot(q, (snapshot) => {
//     let leaderboard = []
//     snapshot.docs.forEach(doc => {
//         leaderboard.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(leaderboard)
//     })




const PlayerRow = ({id, rank, name})=>{

    const [isSending, setSending] = useState(false)

    const sendText = async () =>{

        setSending(true)
        console.log(id)

        // TODO: send POST request to your sms endpoint w/ player id
        const res = await fetch('/api/sms', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })

        setSending(false)
        
    }

    

    return (
        <div>
        <section className={styles.row}>
            <h2>{rank}</h2>
            <h2>{name}</h2>
            <Spacer />
            <Button 
                size='sm' 
                onClick={sendText} 
                className={styles.text}
                disabled={isSending}
            >
                Send Text
            </Button>
        </section>
        </div>
    )
}

export default PlayerRow
