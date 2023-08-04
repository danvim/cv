import styled from "styled-components";

export const UL = styled.ul`
  padding: 0;
`;

export const LI = styled.li`
  list-style: none;

  &:not(&:last-of-type) {
    margin-bottom: 8pt;
  }
`;
