/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Dashboard} from './src/screens';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;
