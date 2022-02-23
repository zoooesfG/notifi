// import { Box, h2 } from "theme-ui"


import { Stack, HStack, VStack, Box, StackDivider, Link, Flex, Spacer } from '@chakra-ui/react'
// import { Button, h2 } from 'next-theme-ui'


export default function PlayerRow (){

    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
        <Flex justify="space-between" h='40px' w="50vw" bg='pink.100'>
            <h2>score</h2>
            <h2>name</h2>
            <Spacer />
            <button>text</button>
        </Flex>
        </VStack>
    )
}

