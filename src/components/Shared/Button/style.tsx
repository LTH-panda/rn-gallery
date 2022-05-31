import styled from 'styled-components/native';

type ButtonBlockProps = {
  primary?: boolean;
  bgWhite?: boolean;
  border?: boolean;
  full?: boolean;
  mgBot?: boolean;
  pressed: boolean;
};

export const ButtonBlock = styled.View<ButtonBlockProps>`
  justify-content: center;
  align-items: center;
  align-self: ${props => (props.full ? 'auto' : 'flex-start')};
  opacity: ${({pressed}) => (pressed ? 0.55 : 1)};
  border-width: ${props => (props.border ? 1 : 0)};
  border-radius: 16px;
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: ${props => (props.mgBot ? '16px' : 0)};
  background-color: ${props => props.primary && '#5c7cfa'};
  background-color: ${props => props.bgWhite && '#fff'};
`;
