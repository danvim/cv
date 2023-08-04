import { ReactNode } from "react";
import styled from "styled-components";

interface EntryProps {
  children: ReactNode;
  dated?: ReactNode;
}

export const Entry = styled.div.attrs<EntryProps>(({ children, dated }) => ({
  children: (
    <>
      <span>{children}</span>
      {dated && <span>{dated}</span>}
    </>
  ),
}))<EntryProps>`
  display: flex;
  flex-direction: row;
  align-self: stretch;

  & > :first-child {
    flex: 1;
  }
`;
