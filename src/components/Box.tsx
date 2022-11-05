import styled from 'styled-components'

interface BoxProps {
  column?: boolean
  centerItems?: boolean
  gap?: number
}

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${p => p.column ? 'column' : 'row'};
  align-items: ${p => p.centerItems ? 'center' : 'flex-start'};
  gap: ${p => p.gap ? p.gap + 'px' : 'unset'}
`