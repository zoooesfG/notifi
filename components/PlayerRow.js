// import { Box, h2 } from "theme-ui"


import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer } from '@chakra-ui/react'
// import { Button, h2 } from 'next-theme-ui'
// const accountSid = 'AC5f9691961d94930f319e05797d60cd52'; // Your Account SID from www.twilio.com/console
// const authToken = '18423e3d6cc5dfcff709214d70f1648e'; // Your Auth Token from www.twilio.com/console
// const client = require('twilio')(accountSid, authToken);


// client.messages
//   .create({
//     body: 'Hello from Node',
//     to: '+16475378775', // Text this number
//     from: '+12163696199', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));


const PlayerRow = ({id, rank, name, score})=>{

    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
        <Flex justify="space-between" h='40px' w="50vw" bg='pink.100' key={id}>
            <h2>{rank}</h2>
            <h2>{name}</h2>
            <h2>{score}</h2>
            <Spacer />
            <button>text</button>
        </Flex>
        </VStack>
    )
}

export default PlayerRow
