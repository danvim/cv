import styled from 'styled-components'

interface HeadingProps {
  size?: number
  upper?: boolean
}

export const Heading = styled.h1<HeadingProps>`
  color: #2dcce0;
  margin: 0;
  font-size: ${p => p.size ?? 32}px;
  text-transform: ${p => p.upper ? 'uppercase' : 'unset'};
`