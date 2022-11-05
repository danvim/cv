import styled from 'styled-components'
import { ReactNode } from 'react'
import { Heading } from './Heading'

interface SectionProps {
  title: string
  children: ReactNode
}

export const Section = styled.section.attrs<SectionProps>(({ title, children }) => ({
  children: (
    <>
      <Heading size={20} upper>{title}</Heading>
      {children}
    </>
  )
}))`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`