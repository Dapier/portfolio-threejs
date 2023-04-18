import React from 'react'
import {
  Container,
  Box,
  Heading,
  Button,
  Stack,
  Icon,
  Divider,
  IconButton,
  Center
} from '@chakra-ui/react'
import Paragraph from './../src/components/common/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { NextPage } from 'next'
import Hero from '../src/components/Hero'
import Experience from '../src/components/Experience'
import Section from '../src/components/Section'
import Layout from '../src/components/layouts/article'
import VoxelModel from '../src/components/Model'
import NoSsr from './../src/components/no-ssr'

import { motion } from 'framer-motion'

//Icons
import { TbSql, TbBrandCSharp } from 'react-icons/tb'
import { IoLogoReact } from 'react-icons/io5'
import {
  SiTypescript,
  SiNextdotjs,
  SiVisualstudio,
  SiJavascript,
  SiCplusplus,
  SiKotlin,
  SiVisualstudiocode,
  SiLinkedin,
  SiGithub
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Page: NextPage<any> = ({}) => {
  return (
    <>
      <Layout>
        <Container maxW="1200px" mt={10}>
          <Hero />
          <NoSsr>
            <VoxelModel />
          </NoSsr>
          <Box borderRadius={'lg'} p={2}>
            Hi, I&apos;m David, Front-End Developer living in Monterrey City ⛰.
            Software engineering student, one year away from graduating, seeking
            professional internships or internships related to web development.
          </Box>

          {/* Introduce */}
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              About Me
            </Heading>
            <Paragraph>
              Mobile and Web Developer Engineering Student with 1+ year
              experience. I possess strong technical skills with hands on
              knowledge of development software like HTML, CSS, JavaScript, C#,
              SQL, Kotlin and Java. My key strengths include adeptness at
              problem-solving and troubleshooting along with ensuring compliance
              to high-quality standards.
            </Paragraph>
            <Box align="center" my={4}>
              <Link href="/works" passHref legacyBehavior>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                  My Portfolio
                </Button>
              </Link>
            </Box>
          </Section>
          <Section>
            <Experience />
          </Section>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Tech Stack
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'flex', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
              alignItems="center"
            >
              <Icon as={TbSql} boxSize={10} />
              <Icon as={IoLogoReact} boxSize={10} />
              <Icon as={SiJavascript} boxSize={10} />
              <Icon as={SiTypescript} boxSize={10} />
              <Icon as={SiNextdotjs} boxSize={10} />
              <Icon as={FaJava} boxSize={10} />
              <Icon as={SiKotlin} boxSize={10} />
              <Icon as={TbBrandCSharp} boxSize={10} />
              <Icon as={SiCplusplus} boxSize={10} />
              <Icon as={SiVisualstudio} boxSize={10} />
              <Icon as={SiVisualstudiocode} boxSize={10} />
            </Stack>
          </Section>
        </Container>
      </Layout>
      <Box
        h={'30%'}
        position={'fixed'}
        left={60}
        bottom={0}
        display={{ base: 'none', md: 'flex' }}
        flexDirection={'column'}
        gap={5}
      >
        <a href={'https://github.com/Dapier'} target="_blank">
          <IconButton
            aria-label="Dapier Github Profile"
            icon={<Icon as={SiGithub} />}
          />
        </a>
        <a
          href={'https://www.linkedin.com/in/josue-alvarado-web-developer/'}
          target="_blank"
        >
          <IconButton
            aria-label="Search database"
            icon={<Icon as={SiLinkedin} />}
          />
        </a>
        <Center>
          <Divider orientation="vertical" position={'absolute'} />
        </Center>
      </Box>
    </>
  )
}

export default Page
