// import { Box, h2 } from "theme-ui"
// import twilio from 'twilio'

import { Spacer } from '@chakra-ui/react'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { Button, Box, Heading } from 'theme-ui'

const PlayerRow = ({id, rank, name})=>{
    

    const [isSent, setSent] = useState(false)

    const sendText = async () =>{

        setSent (true)
        console.log(id)

        // TODO: send POST request to your sms endpoint w/ player id
        const res = await fetch('/api/sms', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })

        setSent(false)
        let text = document.getElementsByClassName('.text')
        text.textContent = "sent"
    }

    

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '60vw',
            margin: '1em',
            borderRadius: '5px',
            background: '#f4fcfe',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#4682B4',
            border: '#00a3ff solid 2px',
            padding: '0.25em 1em'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Heading as="h2" sx={{marginRight:"1em"}}>{rank}</Heading>
                <Heading as="h2">{name}</Heading>
            </Box>
            <Button 
                sx={{
                    backgroundColor: ! isSent ? "#b1f3fe" :"#00a3ff",
                    border: "1px solid #00a3ff",
                    color: ! isSent ? "#00a3ff" : "white",
                    alignSelf:"flex-end"
                }}
                onClick={sendText} 
                disabled={isSent}
            >
                Send Text
            </Button>
        </Box>
    )
}

export default PlayerRow
