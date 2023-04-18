import {
  Container,
  Box,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  MenuButton,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from '../Logo'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import ThemeToggleBtn from './theme-toggle-btn.js'

const LinkItem = ({ href, path, children, ...props }: any) => {
  const active = path === href
  const inactiveColor = useColorModeValue('purple600', 'cian50')
  return (
    <Link href={href} passHref legacyBehavior>
      <ChakraLink
        p={2}
        bg={active ? 'glassTeal' : undefined}
        variant={active ? 'outline' : 'teal'}
        color={active ? '#202023' : inactiveColor}
        as="a"
        {...props}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}

const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap={'wrap'}
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        <Flex alignItems="center" mr={5} flex={1}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          alignItems="center"
          fontFamily={'Space Mono'}
        >
          <LinkItem href={'/'} path={path}>
            About Me
          </LinkItem>

          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>

          <LinkItem href={'/contact'} path={path}>
            Contact Me
          </LinkItem>
        </Stack>
        <Box alignItems={'right'} pr={4}>
          <ThemeToggleBtn />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outiline'}
                arial-label={'Options'}
                fontSize="30px"
              />
              <MenuList>
                <Link href="/works" passHref legacyBehavior>
                  <MenuItem as={ChakraLink}>Works</MenuItem>
                </Link>

                <Link href="/contact" passHref legacyBehavior>
                  <MenuItem as={ChakraLink}>Contact</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
