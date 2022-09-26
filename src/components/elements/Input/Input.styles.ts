import styled from 'styled-components/native';
import Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';

interface Props {
  fontSize?: number;
  height?: number;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  flex-wrap: wrap;
  text-align-last: left;
  color: ${theme.colors.white};
  font-size: ${({ fontSize }: Props) =>
    fontSize ? fontSize : theme.fontSizes.big}px;
  bottom: -${Window.heightScale(0.003)}px;
  ${(props: Props) =>
    props.height && `height: ${Window.heightScale(props.height / 100)}px`}
`;
