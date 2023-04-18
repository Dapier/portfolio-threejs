import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../src/components/Work'
import Layout from '../../src/components/layouts/article'
import Paragraph from '../../src/components/common/paragraph'
import { Link as ChakraLink } from '@chakra-ui/react'

const Work = () => {
  return (
    <Layout title={'SpotMe Mx'}>
      <Container mt={10} maxW={'1200px'}>
        <Title>
          SpotMe MX
          <Badge>2022-2023</Badge>
        </Title>
        <Paragraph>
          Spotme mx is a web application where you can generate income by
          renting properties for storage. It features a payment system,
          messaging, user profile section, responsive design for any device, and
          a nearby search algorithm to find a place to store your belongings.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <ChakraLink href="https://spotme.mx/">
              https://spotme.mx/ <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>NextJS, AWS, styled-components, GraphQL</span>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkImage src="/images/spotme.jpg" alt="Spotme Mx App" />
          <WorkImage src="/images/spotme02.jpg" alt="Spotme Mx App" />
          <WorkImage src="/images/spotme03.jpg" alt="Spotme Mx App" />
          <WorkImage src="/images/spotme04.jpg" alt="Spotme Mx App" />
          <WorkImage src="/images/spotme-phone.jpeg" alt="Spotme Mx App" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
