import { Box, Heading } from "theme-ui"




const PlayerRow = ({name, score}) => {

    return (
        <Box>
            <Heading>
                {score}
            </Heading>
            <Heading>
                {name}
            </Heading>
        </Box>
    )
}

export default PlayerRow
