import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../../store';
import {navigationTypes} from '../../types';
import {FailedTab} from './FailedTab';
import {LaunchTab} from './LaunchTab';
import {LoadingTab} from './LoadingTab';

export const Project = ({navigation}: navigationTypes) => {
  const counterValue = useAppSelector(state => state.launches);
  const launchAPIStatus = counterValue.status;
  return (
    <View style={styles.container}>
      {(launchAPIStatus === 'success' || launchAPIStatus === '') && (
        <LaunchTab navigation={navigation} />
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
});
