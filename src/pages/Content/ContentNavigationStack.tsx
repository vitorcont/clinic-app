import { createStack, navigationRef } from '@mobile/services/navigation';
import store from '@mobile/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen/HomeScreen';
import NewPatientNavigationStack from './NewPatient/NewPatientNavigationStack';

const ContentNavigationStack = () => {
  const ContentStack = createStack();

  return (
    <ContentStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <ContentStack.Screen name="HomeScreen" component={HomeScreen} />
      <ContentStack.Screen
        name="NewPatient"
        component={NewPatientNavigationStack}
      />
    </ContentStack.Navigator>
  );
};

export default ContentNavigationStack;
