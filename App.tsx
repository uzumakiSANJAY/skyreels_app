import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;