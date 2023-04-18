import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../src/components/Work'
import Layout from '../../src/components/layouts/article'
import Paragraph from '../../src/components/common/paragraph'
import { Link as ChakraLink } from '@chakra-ui/react'

const Work = () => {
  return (
    <Layout title={'Minimalist Website'}>
      <Container mt={10} maxW={'1200px'}>
        <Title>
          Kann Website
          <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Minimalist website developed with the purpose of practicing ReactJS
          and styled-components.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <ChakraLink href="https://kann.netlify.app/">
              https://kann.netlify.app/ <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <Meta>Tech Stack</Meta>
            <span>ReactJS, styled-components</span>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <ChakraLink href="https://github.com/Dapier/smoth-react-website">
              Repository <ExternalLinkIcon mx={'2px'} />
            </ChakraLink>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkImage
            src={'/images/website.jpg'}
            alt={'Kann website home page'}
          />
          <WorkImage
            src={'/images/website02.png'}
            alt={'Kann website home page'}
          />
          <WorkImage
            src={'/images/website03.png'}
            alt={'Kann website home page'}
          />
          <WorkImage
            src={'/images/website04.png'}
            alt={'Kann website home page'}
          />
          <WorkImage
            src={'/images/website05.png'}
            alt={'Kann website home page'}
          />
          <WorkImage
            src={'/images/website_phone.png'}
            alt={'Kann website home page'}
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
