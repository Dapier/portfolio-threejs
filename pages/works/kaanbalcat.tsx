import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../src/components/Work'
import Layout from '../../src/components/layouts/article'
import Paragraph from '../../src/components/common/paragraph'
import { Link as ChakraLink } from '@chakra-ui/react'

const Work = () => {
  return (
    <Layout title={'Kaanbalcat Blog'}>
      <Container mt={10} maxW={'1200px'}>
        <Title>
          Kannbalcat Blog
          <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Blog with a CMS system using the Hygraph API, where I write articles
          related to web development.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <ChakraLink href="https://kaanbalcat.vercel.app/">
              https://kaanbalcat.vercel.app/ <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>NextJS, GraphQL, Tailwind CSS, Hygraph</span>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 1]} gap={6}>
          <WorkImage
            src={'/images/blog.jpg'}
            alt={'Blog kaanbalcat home page'}
          />
          <WorkImage
            src={'/images/blog02.png'}
            alt={'Blog kaanbalcat home page'}
          />
          <WorkImage
            src={'/images/blog03.png'}
            alt={'Blog kaanbalcat home page'}
          />
          <WorkImage
            src={'/images/blog_cms.png'}
            alt={'Blog kaanbalcat home page'}
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
