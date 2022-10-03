import { Background, Box, Button, Text } from '@mobile/components';
import navigationService from '@mobile/services/navigation';
import theme from '@mobile/theme';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <Background alignItems="center">
      <Box height={15} alignItems="center" justifyContent="center">
        <Text
          text="Minhas Consultas"
          textColor={theme.colors.black}
          textFamily={theme.fonts.bold}
        />
      </Box>
      <S.List
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => (
          <Box
            width={80}
            borderRadius={5}
            overflow="hidden"
            backgroundColor={theme.colors.white}
            shadowBox
            alignSelf="center"
            marginBottom={2}
          >
            <S.TouchableContainer>
              <Box alignSelf="center" alignItems="center" pdVertical={2}>
                <Text text="Cirurgia" textColor={theme.colors.primary} />
                <Text text="Setembro" textColor={theme.colors.primary} />
                <Text
                  text="19/09/2022 - 12:00h"
                  textColor={theme.colors.primary}
                />
                <Text text="Prédio H11" textColor={theme.colors.primary} />
              </Box>
            </S.TouchableContainer>
          </Box>
        )}
      />
      <Box position="absolute" height={10} alignItems="center" bottom={3}>
        <Button
          label="Nova Consulta"
          width={75}
          onPress={() => navigationService.navigate('NewPatient')}
        />
      </Box>
    </Background>
  );
};

export default HomeScreen;
