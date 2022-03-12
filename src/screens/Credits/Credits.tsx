import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export const Credits = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.inq} source={require('../../assets/spinq.png')} />
      </View>
      <Button
        title="Go to Projects"
        onPress={() => navigation.navigate('Project')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inq: {
    resizeMode: 'center',
    width: 2000,
  },
});
