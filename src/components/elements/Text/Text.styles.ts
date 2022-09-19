import styled from 'styled-components/native';

import Window from '@mobile/services/dimensions';

interface IProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  textColor?: string;
  textSize: number;
  textAlign?: string;
  textFamily?: string;
  padding?: number;
}

export const Text = styled.Text`
  margin-top: ${(props: IProps) =>
    props.marginTop ? Window.heightScale(props.marginTop / 100) : 0}px;
  margin-bottom: ${(props: IProps) =>
    props.marginBottom ? Window.heightScale(props.marginBottom / 100) : 0}px;
  margin-left: ${(props: IProps) =>
    props.marginLeft ? Window.widthScale(props.marginLeft / 100) : 0}px;
  margin-right: ${(props: IProps) =>
    props.marginRight ? Window.widthScale(props.marginRight / 100) : 0}px;
  font-size: ${(props: IProps) => Window.fontScale(props.textSize)}px;
  color: ${(props: IProps) => props.textColor};
  ${(props: IProps) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props: IProps) =>
    props.padding && `padding: ${Window.heightScale(props.padding / 100)}px`}
`;
