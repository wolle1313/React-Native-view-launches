import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../store';
import {FailedTab} from './FailedTab';
import {LaunchTab} from './LaunchTab';
import {LoadingTab} from './LoadingTab';

export const Project = ({navigation}) => {
  const counterValue = useAppSelector(state => state.launches);
  const launchAPIStatus = counterValue.status;
  return (
    <View style={styles.container}>
      <View style={styles.creditsBtn}>
        <Button
          title="Credits"
          onPress={() => navigation.navigate('Credits')}
        />
      </View>
      {(launchAPIStatus === 'success' || launchAPIStatus === '') && (
        <LaunchTab />
      )}
      {launchAPIStatus === 'loading' && <LoadingTab />}
      {launchAPIStatus === 'failed' && <FailedTab />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    zIndex: 103,
  },
  creditsBtn: {
    position: 'absolute',
    zIndex: 105,
    fontSize: 16,
    top: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
