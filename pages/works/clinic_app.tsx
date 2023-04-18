import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../src/components/Work'
import Layout from '../../src/components/layouts/article'
import Paragraph from '../../src/components/common/paragraph'
import { Link as ChakraLink } from '@chakra-ui/react'

const Work = () => {
  return (
    <Layout title={'Clinic App'}>
      <Container mt={10}>
        <Title>
          Pocket Clinic App
          <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Application developed as a final project for university with a
          messaging and reservation system to streamline the appointment process
          of a clinic.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>Kotlin, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <ChakraLink href="https://github.com/Dapier/pocket-clinic">
              Repository <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <WorkImage
            src={'/images/pocketclinic.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
          <WorkImage
            src={'/images/pocket_clinic02.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
          <WorkImage
            src={'/images/pocket_clinic03.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
          <WorkImage
            src={'/images/pocket_clinic04.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
          <WorkImage
            src={'/images/pocket_clinic05.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
          <WorkImage
            src={'/images/pocket_clinic06.jpeg'}
            alt={'Berny pharmacy ecommerce home page'}
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
