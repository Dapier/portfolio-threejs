import Layout from '../src/components/layouts/article'
import {
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Textarea,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import { useState } from 'react'
import { sendContactForm } from '../libs/api'
import { error } from 'console'

const initValues = {
  company: '',
  email: '',
  subject: '',
  message: ''
}

const initState = { values: initValues }

const Contact = () => {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})
  const toast = useToast()

  const { values, isLoading, error } = state

  const onBlur = ({ target }) =>
    setTouched(prev => ({ ...prev, [target.name]: true }))

  const handleChange = ({ target }: any) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))

  const onSubmit = async () => {
    setState(prev => ({
      ...prev,
      isLoading: true
    }))

    try {
      await sendContactForm(values)
      //Reset form value
      setTouched({})
      setState(initState)
      toast({
        title: 'Message sent!.',
        status: 'success',
        duration: 2000,
        position: 'top'
      })
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }))
    }
  }

  return (
    <Layout>
      <Container mt={10} maxW={'1200px'}>
        <Heading as={'h2'}>Contact Me</Heading>
        <Text textAlign="center" mb={8}>
          You can send me an email and I will respond as soon as possible.
        </Text>

        {error && (
          <Text color={'red.300'} my={4}>
            {error}
          </Text>
        )}

        <FormControl
          isRequired
          isInvalid={touched.company && !values.company}
          my={2}
        >
          <FormLabel>Company Name</FormLabel>
          <Input
            type="text"
            name="company"
            errorBorderColor="red.300"
            value={values.company}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          my={2}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          my={2}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            errorBorderColor="red.300"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          my={2}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            errorBorderColor="red.300"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
          variant={'solid'}
          colorScheme="cyan"
          isLoading={isLoading}
          w={'100%'}
          my={2}
          disabled={
            !values.company ||
            !values.email ||
            !values.subject ||
            !values.message
          }
          onClick={onSubmit}
        >
          Submit
        </Button>

        <Box
          display={'flex'}
          my={4}
          alignContent={'center'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Divider w={'40%'} />
          <Text> Or </Text>
          <Divider w={'40%'} />
        </Box>

        <Box justifyContent={'center'} mt={10} w={'100%'}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://www.linkedin.com/in/josue-alvarado-11b799166/"
              passHref
              legacyBehavior
            >
              <Button
                w={'100%'}
                leftIcon={<Icon as={SiLinkedin} />}
                colorScheme="teal"
                variant="solid"
              >
                Send me message on Linkedin
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact
