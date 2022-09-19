import MainNavigationStack from '@mobile/pages/MainNavigationStack';
import { navigationRef } from '@mobile/services/navigation';
import store from '@mobile/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <FlashMessage position="top" />
        <NavigationContainer ref={navigationRef}>
          <MainNavigationStack />
        </NavigationContainer>
      </SafeAreaProvider>
      <View />
    </Provider>
  );
};

export default App;
