import Link from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w={'100%'} alignContent={'center'}>
    <LinkBox cursor={'pointer'}>
      <Image src={thumbnail} alt={title} placeholder="blur" loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w={'100%'} alignContent={'center'}>
    <Link href={`/works/${id}`} passHref legacyBehavior>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder='"blur'
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20} fontFamily={'Space Mono'}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Link>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail{
            border-radius: 20px;
        }
    `}
  />
)
