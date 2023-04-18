import { motion } from 'framer-motion'
import { Box, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export const ExpSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  padding-bottom: 40px;
`

export const ExpYear = styled.span`
  font-family: 'Space Mono';
  font-weight: bold;
  margin-right: 1em;
`

const Experience = () => (
  <motion.div
    animate={{ x: 10 }}
    transition={{ type: 'spring', stiffness: 100 }}
  >
    <Heading as="h3" variant="section-title">
      Employment Experience
    </Heading>
    <ExpSection>
      <ExpYear>Front-End Jr Summer 2022 - Fall 2023</ExpYear>
      Worked in collaboration with wonderful people on an application from
      scratch as a Front-end developer JR, creating reusable components,
      optimizing the application, improving the UI/UX, and implementing a CMS
      system to automate content creation and expand the reach of the
      application.{' '}
      <Link href="https://spotme.mx/" passHref legacyBehavior>
        <ChakraLink as="a" isExternal>
          Visit here
        </ChakraLink>
      </Link>
    </ExpSection>

    <ExpSection>
      <ExpYear>Web Developer Fall 2021 - Summer 2022</ExpYear>
      Worked in collaboration with wonderful people on an application from
      scratch as a Front-end developer JR, creating reusable components,
      optimizing the application, improving the UI/UX, and implementing a CMS
      system to automate content creation and expand the reach of the
      application.{' '}
    </ExpSection>
  </motion.div>
)

export default Experience
