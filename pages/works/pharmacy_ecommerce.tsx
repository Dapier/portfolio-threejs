import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../src/components/Work'
import Layout from '../../src/components/layouts/article'
import Paragraph from '../../src/components/common/paragraph'
import { Link as ChakraLink } from '@chakra-ui/react'

const Work = () => {
  return (
    <Layout title={'Pharmacy E-commerce'}>
      <Container mt={10}>
        <Title>
          Pharmacy E-commerce
          <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Virtual store for a pharmacy with a payment system using the Stripe
          API, shopping cart to store products that the user wants to buy,
          product creation in the admin section, and an authentication system
          with Firebase.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>ReactJS, nodeJs, Firebase, Stripe, Materialize</span>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <ChakraLink href="https://github.com/Dapier/Pharmacy/tree/main">
              Repository <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
        </List>

        <WorkImage
          src={'/images/ecommerce.png'}
          alt={'Berny pharmacy ecommerce home page'}
        />
      </Container>
    </Layout>
  )
}

export default Work
