import { Box, Button } from '@mobile/components';
import navigationService, {
  createStack,
  navigationRef,
} from '@mobile/services/navigation';
import store from '@mobile/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

const LoginScreen = () => {
  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Box
        height={20}
        justifyContent={'space-between'}
        flexDirection={'column'}
      >
        <Button
          title="Recuperar"
          onPress={() => navigationService.navigate('Recovery')}
        />
        <Button
          title="Entrar"
          onPress={() => navigationService.navigate('Content')}
        />
      </Box>
    </Box>
  );
};

export default LoginScreen;
