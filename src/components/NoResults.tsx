import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {results} from '../constants/constants';

export const NoResults = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{results.noResults}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
