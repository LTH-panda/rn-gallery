import styled, {css} from 'styled-components/native';

type ButtonBlockProps = {
  primary?: boolean;
  full?: boolean;
  mgBot?: boolean;
  pressed: boolean;
};

export const ButtonBlock = styled.View<ButtonBlockProps>`
  justify-content: center;
  align-items: center;
  ${({full}) =>
    !full
      ? css`
          align-self: flex-start;
        `
      : ''}
  border-radius: 16px;
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  ${({mgBot}) =>
    mgBot &&
    css`
      margin-bottom: 16px;
    `}
  opacity: ${({pressed}) => (pressed ? 0.55 : 1)};

  ${({primary}) =>
    primary
      ? css`
          background: #5c7cfa;
        `
      : css`
          border: 1px solid #000;
        `}
`;
