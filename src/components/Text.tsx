import styled from 'styled-components'

interface TextProps {
  size?: number
  color?: string
}

export const Text = styled.span<TextProps>`
  font-size: ${p => p.size ?? 'inherit'}px;
  color: ${p => p.color ?? 'unset'}
`