import styled from 'styled-components/native';

import Window from '@mobile/services/dimensions';
import theme from '@mobile/theme';

interface IProps {
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  position?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
  pdVertical?: number;
  pdHorizontal?: number;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
  borderRadius?: number;
  shadowBox?: boolean;
  shadowColor?: string;
  borderColor?: string;
  elevation?: number;
  borderWidth?: number;
  flexDirection?: string;
  flexWrap?: string;
  overflow?: string;
  zIndex?: number;
  flex?: number;
}

export const Box = styled.View`
  ${(props: IProps) => props.alignItems && `align-items: ${props.alignItems}`}
  ${(props: IProps) => props.overflow && `overflow: ${props.overflow}`}
  ${(props: IProps) => props.flex && `flex: ${props.flex}`}
  ${(props: IProps) => props.alignSelf && `align-self: ${props.alignSelf}`}
  ${(props: IProps) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`}
    ${(props: IProps) =>
    props.flexDirection && `flex-direction: ${props.flexDirection}`}
    ${(props: IProps) => props.flexWrap && `flex-wrap: ${props.flexWrap}`}
    
  ${(props: IProps) =>
    props.width && `width: ${Window.widthScale(props.width / 100)}px`}
  ${(props: IProps) =>
    props.height && `height: ${Window.heightScale(props.height / 100)}px`}
  ${(props: IProps) =>
    props.backgroundColor && `backgroundColor: ${props.backgroundColor}`}
  ${(props: IProps) => props.position && `position: ${props.position}`}

  ${(props: IProps) =>
    props.pdHorizontal &&
    `padding-horizontal: ${Window.heightScale(props.pdHorizontal / 100)}px`}
  ${(props: IProps) =>
    props.pdVertical &&
    `padding-vertical: ${Window.heightScale(props.pdVertical / 100)}px`}  
  ${(props: IProps) =>
    props.pdLeft && `padding-left: ${Window.heightScale(props.pdLeft / 100)}px`}
  ${(props: IProps) =>
    props.pdRight &&
    `padding-right: ${Window.heightScale(props.pdRight / 100)}px`}
  ${(props: IProps) =>
    props.pdTop && `padding-top: ${Window.heightScale(props.pdTop / 100)}px`}
  ${(props: IProps) =>
    props.pdBottom &&
    `padding-bottom: ${Window.heightScale(props.pdBottom / 100)}px`}

  ${(props: IProps) =>
    props.marginHorizontal &&
    `margin-horizontal: ${Window.heightScale(props.marginHorizontal / 100)}px`}
  ${(props: IProps) =>
    props.marginVertical &&
    `margin-vertical: ${Window.heightScale(props.marginVertical / 100)}px`}  
  ${(props: IProps) =>
    props.marginLeft &&
    `margin-left: ${Window.heightScale(props.marginLeft / 100)}px`}
  ${(props: IProps) =>
    props.marginRight &&
    `margin-right: ${Window.heightScale(props.marginRight / 100)}px`}
  ${(props: IProps) =>
    props.marginTop &&
    `margin-top: ${Window.heightScale(props.marginTop / 100)}px`}
  ${(props: IProps) =>
    props.marginBottom &&
    `margin-bottom: ${Window.heightScale(props.marginBottom / 100)}px`}
    
  ${(props: IProps) =>
    props.borderColor && `border-color: ${props.borderColor}`}
  ${(props: IProps) =>
    props.left && `left: ${Window.heightScale(props.left / 100)}px`}
    ${(props: IProps) =>
    props.right && `right: ${Window.heightScale(props.right / 100)}px`}
    ${(props: IProps) =>
    props.bottom && `bottom: ${Window.heightScale(props.bottom / 100)}px`}
    ${(props: IProps) =>
    props.top && `top: ${Window.heightScale(props.top / 100)}px`}
  ${(props: IProps) =>
    props.borderRadius &&
    `border-radius: ${Window.widthScale(props.borderRadius / 100)}px`}

  ${(props: IProps) => props.shadowBox && `elevation: 5;`}
  ${(props: IProps) =>
    props.shadowBox && `shadow-color: ${theme.colors.black};`}
  ${(props: IProps) =>
    props.shadowBox &&
    `shadow-offset: ${Window.widthScale(0)}px ${Window.widthScale(2)}px;`}
  ${(props: IProps) => props.shadowBox && 'shadow-opacity: 0.25;'}
  ${(props: IProps) =>
    props.shadowBox && `shadow-radius: ${Window.widthScale(3)}px;`}   
  ${(props: IProps) => props.zIndex && `z-index: ${props.zIndex}`}
`;
