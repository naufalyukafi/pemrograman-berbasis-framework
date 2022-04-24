import React from 'react'
import {
    Box,
    Heading,
    Center,
} from '@chakra-ui/react'

const CardLayout = ({ title, children }) => {
    return (
        <Box>
            <Center>
                <Heading
                    as='h2'
                    size='xl'
                    mt="20"
                    color="#2A9D8F"
                    borderColor='#E9C46A'
                    textAlign="center"
                    borderBottom='solid #E9C46A 10px'
                    width="350px"
                >{title}</Heading>
            </Center>
            {children}
        </Box>
    )
}

export default CardLayout
