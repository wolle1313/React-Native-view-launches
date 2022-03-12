import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APIStatus} from '../../constants/constants';
import {useAppDispatch} from '../../store';
import {fetchLaunches} from '../../store/launchesSlice';
import {colors} from '../../styles';

export const FailedTab = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.infoText}>{APIStatus.failed}</Text>
        <TouchableOpacity
          style={styles.retryBtnWrapper}
          onPress={() => dispatch(fetchLaunches())}>
          <Text style={styles.retryBtn}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: -50,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  retryBtnWrapper: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.blue,
    borderRadius: 10,
  },
  retryBtn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
