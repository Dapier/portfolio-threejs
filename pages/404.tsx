import Link from 'next/link'
import {
  Box,
  Text,
  Heading,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NotFoundModel from '../src/components/NotFoundModel'
import NoSsr from './../src/components/no-ssr'

const NotFound = () => {
  return (
    <Container
      maxW={'1200px'}
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        animate={{ x: -10 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <NoSsr>
          <NotFoundModel />
        </NoSsr>
      </motion.div>

      <Heading as="h1"> Error 404 - Page Not Found :(</Heading>
      <Text>Wow!, it seems like this site doesn&apos;t exist.</Text>
      <Divider my={6} />
      <Box my={6} alignContent={'center'} align={'center'}>
        <Link href="/" passHref legacyBehavior>
          <Button colorScheme="cyan">Back to Home</Button>
        </Link>
      </Box>
    </Container>
  )
}

export default NotFound
