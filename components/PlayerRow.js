// import { Box, h2 } from "theme-ui"
import { Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Button, Box, Heading, Text, Spinner} from 'theme-ui'
const PlayerRow = ({id, rank, name, sent})=>{
    
    const [isSending, setSending] = useState(false)
    const [isSent, setSent] = useState(sent)

    const sendText = async () =>{
        // checkFirestore()
        setStart(false)
        setSending (true)
        console.log(id)

        // TODO: send POST request to your sms endpoint w/ player id
        const res = await fetch('/api/sms', {
            method:"POST",
            body: JSON.stringify({userId: id})
        })

        setSending(false)
        setSent(true)
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
            color: '#764ea7',
            border: '#764ea7 solid 2px',
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
                    backgroundColor: ! isSent ? "#98e2ff" :"#764ea7",
                    border: "1.5px solid #764ea7",
                    color: ! isSent? "#764ea7" : "white",
                    alignSelf:"flex-end",
                    width: "5em",
                    height:"2.5em",
                    "&:hover":{
                        backgroundColor:! isSent ?"#ff9390" : "#764ea7",
                        border:! isSent ?"5px dotted #e87791" : "1.5px solid #764ea7",
                        color:! isSent ?"white" : "white",
                        cursor:! isSent ?"pointer" : "no-drop" 
                    }
                }}
                onClick={sendText}
                disabled={isSending || isSent}
            >
                {isSending &&
                    <Box><Spinner variant="styles.spinner"/></Box>
                }
                {isSent
                    ?<Text>Sent!</Text>
                    :<Text>Send</Text>
                }

            </Button>
        </Box>
    )
}

export default PlayerRow
