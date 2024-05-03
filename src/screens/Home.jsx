import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const Home = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title='Details' onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const styles = StyleSheet.create({});
