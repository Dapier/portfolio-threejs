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
import Head from 'next/head'

const Page: NextPage<any> = ({}) => {
  return (
    <>
      <Head>
        <title>
          Josue Alvarado | Front-end Developer | Software Developer{' '}
        </title>
        <meta
          name="title"
          content="Josue Alvarado | Front-End Developer| Software Enginner"
        />
        <meta
          name="description"
          content="Front-end Developer with 1+ years of experience in web and mobile application development, with expertise in web design (UI/UX) and databases SQL."
        />
        <meta
          name="keywords"
          content="Web Development, Software Development, Front-end Developer, Software Engineer, Front-end React Jr"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dapier.dev/" />
        <meta
          property="og:title"
          content="Josue Alvarado | Front-end Developer | Software Developer "
        />

        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dapier.dev/" />
        <meta
          property="twitter:title"
          content="Josue Alvarado | Front-end Developer | Software Developer "
        />
        <meta
          property="twitter:description"
          content="Software engineer student with 1+ year experience in web and mobile development. "
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
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
            <Center w={'full'} my={4}>
              <Box>
                <Link href="/works" passHref legacyBehavior>
                  <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                    My Portfolio
                  </Button>
                </Link>
              </Box>
            </Center>
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
