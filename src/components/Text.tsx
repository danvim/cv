import styled from "styled-components";

interface TextProps {
  size?: number;
  color?: string;
}

export const Text = styled.span<TextProps>`
  font-size: ${(p) => p.size ?? "inherit"}px;
  color: ${(p) => p.color ?? "unset"};
`;

export const Desc = styled(Text)`
  font-size: 0.875em;
  color: ${(p) => p.color ?? "#16598a"};

  > p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
