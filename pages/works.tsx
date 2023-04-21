import { Container, HStack, Heading, SimpleGrid, Tag } from '@chakra-ui/react'
import { WorkGridItem } from '../src/components/common/grid-items'
import Section from '../src/components/Section'
import Layout from '../src/components/layouts/article'
// Projects SS

import pocketClinic from './../public/images/pocketclinic.jpeg'
import spotme from '../public/images/spotme.jpg'
import kaanbalcatBlog from '../public/images/blog.jpg'
import pharmacyEcommerce from '../public/images/ecommerce.png'
import website from '../public/images/website.jpg'

const Works = () => {
  return (
    <Layout>
      <Container mt={10} maxW={'1200px'}>
        <Heading as="h3" fontSize={20} mb={4}>
          My Works
        </Heading>
        <SimpleGrid columns={[1, 2, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id={'Spotme-mx'}
              title={'SpotMe Mx'}
              thumbnail={spotme}
            >
              <HStack spacing={3} my={2}>
                <Tag variant={'outline'} colorScheme="teal">
                  ReactJs
                </Tag>
                <Tag variant={'outline'} color={'blue.200'}>
                  GraphQL
                </Tag>
                <Tag variant={'outline'} colorScheme="yellow">
                  AWS
                </Tag>
                <Tag variant={'outline'} color="purple.400">
                  styled-components
                </Tag>
                <Tag variant={'outline'} color="blue.400">
                  NextJS
                </Tag>
              </HStack>
              Web application where you can rent out your storage spaces.
              Collaborated as a Junior Front-end Developer in the implementation
              of new reusable components, improvements to UI/UX, and
              implementation of a CMS for content creation for the
              application&apos;s blog.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="kaanbalcat"
              title={'Blog'}
              thumbnail={kaanbalcatBlog}
            >
              <HStack spacing={3} my={2}>
                <Tag variant={'outline'} color="blue.400">
                  NextJS
                </Tag>
                <Tag variant={'outline'} color={'blue.200'}>
                  GraphQL
                </Tag>
                <Tag variant={'outline'} colorScheme="teal">
                  TailwindCSS
                </Tag>
              </HStack>
              Blog with a CMS system using the Hygraph API, where I write
              articles related to web development.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="pharmacy_ecommerce"
              title={'Pharmacy Ecommerce'}
              thumbnail={pharmacyEcommerce}
            >
              <HStack spacing={3} my={2}>
                <Tag variant={'outline'} colorScheme="teal">
                  ReactJS
                </Tag>
                <Tag variant={'outline'} color="purple.400">
                  Stripe
                </Tag>
                <Tag variant={'outline'} color="purple.600">
                  Stripe
                </Tag>
                <Tag variant={'outline'} color="blue.200">
                  Materialize
                </Tag>
                <Tag variant={'outline'} color="yellow.200">
                  Firebase
                </Tag>
              </HStack>
              E-commerce pharmacy with functional payment system, CRUD (Create,
              Read, Update, Delete) for products, authentication, and shopping
              cart.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="clinic_app"
              title={'Clinic App (Kotlin)'}
              thumbnail={pocketClinic}
            >
              <HStack spacing={3} my={2}>
                <Tag variant={'outline'} colorScheme="teal">
                  Kotlin
                </Tag>
                <Tag variant={'outline'} color="yellow.200">
                  Firebase
                </Tag>
              </HStack>
              Application developed as a final project for university with a
              messaging and reservation system to streamline the appointment
              process of a clinic.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="kann"
              title={'Website Minimalist'}
              thumbnail={website}
            >
              <HStack spacing={3} my={2}>
                <Tag variant={'outline'} colorScheme="teal">
                  ReactJS
                </Tag>
                <Tag variant={'outline'} color="purple.400">
                  styled-components
                </Tag>
              </HStack>
              Minimalistic landing page-style website.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
