import Navbar from '../navbar.js'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router}) => {
    return (
        <Box as = "main" pt={0} margin="0px">
            <Navbar path={router.asPath} />
            <Head>
                <meta name = "viewport" content="width=device-width, initial-scale=1"/>
                <title>Tarkan Yildirim</title>
            </Head>

            <Container maxW="container.xl" pt={200}>
                {children}
            </Container>
        </Box>
    )
}

export default Main