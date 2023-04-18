import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../common/grid-items'

const Layout = ({ children, title }: any) => (
  <motion.article>
    <>
      {title && (
        <Head>
          <title>{title} - Josue Alvarado</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout
