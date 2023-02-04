/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { View, Text } from '../styled-components/Themed';

export const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Hello there 👋</Text>
            <Text testID="heading">Time to get to Worki</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
