import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/components/layouts/main'
import theme from '../libs/theme'
import Fonts from '../src/components/fonts.js'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const App = ({ Component, pageProps, router }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: 'polygon(-55% 0, 100% 0, 100% 100%, 0% 100%'
              },
              animateState: {
                opacity: 1,
                clipPath: 'polygon(-95% 0, 100% 0, 100% 100%, 0% 100%'
              },
              exitState: {
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%'
              }
            }}
            className="base-page-size"
          >
            <Component {...pageProps} key={router.route} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default App
