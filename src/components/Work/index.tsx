import Link from 'next/link'
import { Heading, Box, Badge, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react'
export const Title = ({ children }: any) => (
  <Box>
    <Link href={'/works'} legacyBehavior passHref>
      <ChakraLink>Works</ChakraLink>
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display={'inline-block'} as={'h3'} fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: any) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: any) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
