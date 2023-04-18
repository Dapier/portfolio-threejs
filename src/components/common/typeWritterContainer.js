import styled from '@emotion/styled'

const TypeWritterContainer = styled.span`
  font-size: 40px;
  width: 5.5em;
  border-radius: 8px;
  padding-left: 10px;

  &::after {
    content: '|';
  }
`
export default TypeWritterContainer
