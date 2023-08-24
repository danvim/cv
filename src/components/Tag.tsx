import styled, { css } from "styled-components";

const lesserStyle = css`
  --border-width: 1px;
  border: 1px solid #999;
  color: #999;
`;

const normalStyle = css`
  --border-width: 1px;
  border: 1px solid #16598a;
  color: #16598a;
`;

const niceStyle = css`
  --border-width: 2px;
  background-image: linear-gradient(90deg, #396ed6 0%, #2caec6 100%);
  background-size: calc(100% + calc(var(--border-width) * 4));
  background-position: center;
  border: 2px solid transparent;
  color: #16598a;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: -1;
    border-radius: 100px;
  }
`;

const perfectStyle = css`
  ${niceStyle};
  background-image: linear-gradient(90deg, #1668ff 0%, #02c2e9 100%);

  box-shadow: 0 2px 6px 0 #2caec666;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
  color: #00818d;

  &::before {
    background: linear-gradient(90deg, #c7f5ff 0%, #d8ffff 100%);
    box-shadow:
      0 0 2px rgba(196, 255, 255, 0.95),
      0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

const tagStylesByName = {
  lesserStyle,
  normalStyle,
  niceStyle,
  perfectStyle,
} as const;

const TagBase = styled.div`
  --border-width: 1px;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 1em;
  font-size: 0.75em;
  line-height: 1.5em;
  padding: calc(2px - var(--border-width)) calc(8px - var(--border-width));
`;

export const LesserTag = styled(TagBase)`
  ${lesserStyle};
`;

export const Tag = styled(TagBase)`
  ${normalStyle};
`;

export const NiceTag = styled(TagBase)`
  ${niceStyle};
`;

export const PerfectTag = styled(TagBase)`
  ${perfectStyle};
`;

export const Legend = styled.div<{ $styleName: keyof typeof tagStylesByName }>`
  --size: 12px;
  box-sizing: border-box;
  width: var(--size);
  height: var(--size);
  border-radius: calc(var(--size) / 2);

  ${(p) => tagStylesByName[p.$styleName]};

  background-size: var(--size);
`;

export const Label = styled.span`
  font-size: 0.75em;
  font-style: italic;
  color: #999;
`;
