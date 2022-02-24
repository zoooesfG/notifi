// import { Box, h2 } from "theme-ui"


import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer, Button } from '@chakra-ui/react'
// import { Button, h2 } from 'next-theme-ui'



const PlayerRow = ({id, rank, name, score})=>{

    return (
        <VStack
        divider={<StackDivider borderColor='pink.200' />}
        spacing={4}
        align='stretch'
        >
        <Flex justify="space-between" h='40px' w="50vw" bg='tomato' key={id}>
            <h2>{rank}</h2>
            <h2>{name}</h2>
            <h2>{score}</h2>
            <Spacer />
            <Button colorScheme='teal' size='sm'>Send Text</Button>
        </Flex>
        <Spacer/>
        </VStack>
    )
}

export default PlayerRow
