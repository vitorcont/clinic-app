import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

import * as S from './Box.styles';

export interface IBoxProps {
  children?: React.ReactNode;
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
  zIndex?: number;
  ref?: React.Ref<View>;
  style?: StyleProp<ViewStyle>;
  flex?: number;
}

const Box = ({
  elevation,
  borderColor,
  borderWidth,
  children,
  justifyContent,
  alignItems,
  alignSelf,
  width,
  height,
  backgroundColor,
  position,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  pdTop,
  pdBottom,
  pdLeft,
  pdRight,
  pdVertical,
  pdHorizontal,
  left,
  right,
  bottom,
  top,
  borderRadius,
  shadowBox,
  shadowColor,
  ref,
  style,
  flexDirection,
  flexWrap,
  zIndex,
  flex,
}: IBoxProps) => (
  <S.Box
    ref={ref}
    borderWidth={borderWidth}
    elevation={elevation}
    borderColor={borderColor}
    alignItems={alignItems}
    alignSelf={alignSelf}
    justifyContent={justifyContent}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    position={position}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginHorizontal={marginHorizontal}
    marginVertical={marginVertical}
    pdTop={pdTop}
    pdBottom={pdBottom}
    pdLeft={pdLeft}
    pdRight={pdRight}
    pdHorizontal={pdHorizontal}
    pdVertical={pdVertical}
    left={left}
    right={right}
    bottom={bottom}
    top={top}
    borderRadius={borderRadius}
    shadowBox={shadowBox}
    shadowColor={shadowColor}
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    zIndex={zIndex}
    style={style}
    flex={flex}
  >
    {children}
  </S.Box>
);

export default Box;
