import styled from 'styled-components'

export const A4 = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 210mm;
  height: 297mm;
  overflow: hidden;
  padding: 0.75cm;
  background: #fff;

  @media screen {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  &::before, &::after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
  }

  &::before {
    height: 20px;
    background-color: #2dcce0
  }

  &::after {
    height: 15px;
    background-color: #222
  }
`