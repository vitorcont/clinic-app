import { Box, Text } from '@mobile/components';
import theme from '@mobile/theme';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as S from './Header.style';
import { TouchableOpacity } from 'react-native';
import navigationService from '@mobile/services/navigation';

interface IHeaderProps {
  title: string;
  goBack?: boolean;
}

const Header = (props: IHeaderProps) => {
  return (
    <Box alignItems="center" justifyContent="center">
      <Box width={100} marginTop={8} flexDirection="row" alignItems="center">
        <Box width={30} position="absolute" right={1} overflow="hidden">
          <S.LogoImage resizeMode="contain" resizeMethod="auto" />
        </Box>
        {props.goBack && (
          <TouchableOpacity onPress={navigationService.back}>
            <Box width={30} left={3} overflow="hidden">
              <Ionicons name="arrow-back" size={28} color="black" />
            </Box>
          </TouchableOpacity>
        )}
      </Box>
      <Box marginTop={4} marginBottom={3}>
        <Text
          text={props.title}
          textColor={theme.colors.black}
          textFamily={theme.fonts.bold}
          textSize={28}
        />
      </Box>
    </Box>
  );
};

export default Header;
