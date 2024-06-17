import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}

export default HomeScreen;
