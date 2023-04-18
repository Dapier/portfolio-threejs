import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

export const TypingText = styled.span`
  font-family: 'Space Mono';
`

interface TypeWrittingProps {
  words: string[]
}

export default function TypeWritter({ words }: TypeWrittingProps) {
  const [typing, setTyping] = useState('')
  // time to write the words from text array
  const [typingSpeed, setTypingSpeed] = useState(1000)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loop, setLoop] = useState(0)

  const index: number = loop % words.length
  const fullWord: string = words[index]

  const handleTyping = () => {
    setTyping(
      isDeleting
        ? fullWord.substring(0, typing.length - 1)
        : fullWord.substring(0, typing.length + 1)
    )

    setTypingSpeed(isDeleting ? 10 : 100)

    if (!isDeleting && typing === fullWord) {
      setTimeout(() => setIsDeleting(true), 400)
    } else if (isDeleting && typing === '') {
      setIsDeleting(false)
      setLoop(loop + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => {
      clearTimeout(timer)
    }
  })
  return <TypingText>{typing}</TypingText>
}
