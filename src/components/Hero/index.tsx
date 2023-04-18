import { Box, Heading } from '@chakra-ui/react'
import TypeWritter from '../../../hooks/useTypeWritter'
import TypeWritterContainer from '../common/typeWritterContainer'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} h={40}>
          <Heading
            display={{ base: 'none', md: 'inline-block' }}
            as={'h2'}
            variant="page-title"
            position="absolute"
            fontSize={'6rem'}
            left={10}
            zIndex={-1}
          >
            Josue Alvarado
          </Heading>

          <Heading
            display={{ base: 'inline-block', md: 'none' }}
            as={'h2'}
            variant="page-title"
            fontSize={'50px'}
            left={10}
            zIndex={-1}
          >
            Josue Alvarado
          </Heading>
        </Box>
      </Box>
      <motion.div
        animate={{ x: -10 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Box h={20}>
          <TypeWritterContainer>
            <TypeWritter
              words={[
                'Software Enginner',
                'Front-End Developer',
                'Web Developer'
              ]}
            />
          </TypeWritterContainer>
        </Box>
      </motion.div>
    </>
  )
}

export default Hero
