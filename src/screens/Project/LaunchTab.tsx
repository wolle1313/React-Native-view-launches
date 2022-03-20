import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {NoResults} from '../../components';
import {loadLaunchesBtn} from '../../constants/constants';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchLaunches, selectLaunches} from '../../store/launchesSlice';
import {colors} from '../../styles';
import {navigationTypes} from '../../types';
import {LaunchRecord} from './LaunchRecord';

export const LaunchTab = ({navigation}: navigationTypes) => {
  const dispatch = useAppDispatch();
  const [filterInput, setFilterInput] = useState('');
  const counterValue = useAppSelector(selectLaunches);
  const launchRecords = counterValue.launches;

  const filteredLaunchRecords = launchRecords.filter(record => {
    const lowerRecord = record.mission_name.toLowerCase();
    const lowerFilter = filterInput.toLowerCase();
    return lowerRecord.includes(lowerFilter);
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => dispatch(fetchLaunches())}>
        <View style={styles.loadBtnWrapper}>
          <Text style={styles.loadBtn}>
            {launchRecords.length
              ? loadLaunchesBtn.anotherLoad
              : loadLaunchesBtn.firstLoad}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {launchRecords.length ? (
        <TextInput
          style={styles.filterInput}
          placeholder="Search for mission"
          onChangeText={setFilterInput}
          value={filterInput}
        />
      ) : null}
      {launchRecords.length && !filteredLaunchRecords.length ? (
        <NoResults />
      ) : null}
      <View style={styles.launchesWrapper}>
        <FlatList
          data={filteredLaunchRecords}
          renderItem={({item}) => (
            <LaunchRecord launchData={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  loadBtn: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  loadBtnWrapper: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    paddingVertical: 14,
    width: 170,
  },
  launchesWrapper: {
    marginTop: 30,
    marginBottom: 250,
  },
  filterInput: {
    lineHeight: 30,
    fontSize: 20,
    paddingLeft: 15,
    textAlignVertical: 'center',
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    height: 40,
    width: 200,
  },
});
