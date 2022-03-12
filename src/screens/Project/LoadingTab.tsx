import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {APIStatus} from '../../constants/constants';

export const LoadingTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{APIStatus.loading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
