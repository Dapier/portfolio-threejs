import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 15px;
  margin-top: 10px;
`

export default function Logo() {
  const CatLogo = `/logos/Logo${useColorModeValue('', '-light')}.png`
  return (
    <>
      <Link href={'/'}>
        <LogoBox>
          <Image src={CatLogo} width={40} height={40} alt="Cat Logo" />
        </LogoBox>
      </Link>
    </>
  )
}
