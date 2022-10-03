import { createStack, navigationRef } from '@mobile/services/navigation';
import React from 'react';
import Form from './Form/Form';

const NewPatientNavigationStack = () => {
  const NewPatientStack = createStack();

  return (
    <NewPatientStack.Navigator
      initialRouteName="Form"
      screenOptions={{ headerShown: false }}
    >
      <NewPatientStack.Screen name="Form" component={Form} />
    </NewPatientStack.Navigator>
  );
};

export default NewPatientNavigationStack;
