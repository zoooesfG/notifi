// import { Box, h2 } from "theme-ui"
import { Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { Button, Box, Heading, Text, Spinner} from 'theme-ui'
const PlayerRow = ({id, rank, name})=>{
    
    const [isStart, setStart] = useState(true)
    const [isSending, setSending] = useState(false)
    const [isSent, setSent] = useState(false)

    
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
                    color: ! isSent? "#00a3ff" : "white",
                    alignSelf:"flex-end"

                }}
                onClick={sendText} 
                disabled={isSending || isSent}
            >{isStart
                ?<Box>Send</Box>
                :<Box>
                {isSending
                    ? <Box><Spinner variant="styles.spinner"/></Box>
                    : <Box>
                        {isSent
                            ?<Text>Sent</Text>
                            :<Text>Try Again</Text>
                        }
                        </Box>
                    }</Box>
                }
            </Button>
        </Box>
    )
}

export default PlayerRow
