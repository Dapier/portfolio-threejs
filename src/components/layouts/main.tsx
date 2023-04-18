import { Box } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/layout'
import Navbar from '../Navbar'

const Main = ({ children, router }: any) => {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta name="viewport" content="widht=device-width, initial-scale=1" />
        <title>Josue Alvarado - Front-End Developer</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14} centerContent>
        {children}
      </Container>
    </Box>
  )
}

export default Main
