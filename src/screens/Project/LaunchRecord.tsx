import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {launchDataTitles} from '../../constants/constants';
import {colors} from '../../styles';
import {detailsTypes, launchDataTypes} from '../../types';
interface launchRecordProps {
  launchData: launchDataTypes;
  setOpenLaunchInfo: (flag: boolean) => void;
  setSelectedMission: (mission: detailsTypes) => void;
}
export const LaunchRecord = ({
  launchData,
  setOpenLaunchInfo,
  setSelectedMission,
}: launchRecordProps) => {
  const selectMission = () => {
    setSelectedMission({
      mission_name: launchData.mission_name,
      details: launchData.details,
      links: {
        video_link: launchData.links.video_link,
        article_link: launchData.links.article_link,
      },
    });
    setOpenLaunchInfo(true);
  };
  return (
    <TouchableWithoutFeedback onPress={selectMission}>
      <View
        style={[
          styles.container,
          launchData.launch_success
            ? {backgroundColor: colors.gray}
            : {backgroundColor: colors.crimson},
        ]}>
        <View>
          <Text style={styles.sectionTitle}>
            {launchDataTitles.MISSIONNAME}
          </Text>
        </View>
        <Text>{launchData.mission_name}</Text>
        <View>
          <Text style={styles.sectionTitle}>{launchDataTitles.LAUNCHDATE}</Text>
        </View>
        <Text>{launchData.launch_date_local}</Text>
        <View>
          <Text style={styles.sectionTitle}>
            {launchDataTitles.LAUNCHSITENAME}
          </Text>
        </View>
        <Text>{launchData.launch_site.site_name_long}</Text>
        <View>
          <Text style={styles.sectionTitle}>{launchDataTitles.ROCKETNAME}</Text>
        </View>
        <Text>{launchData.rocket.rocket_name}</Text>
        <View>
          <Text style={styles.sectionTitle}>
            {launchDataTitles.LAUNCHSUCCESS}
          </Text>
        </View>
        <Text>{launchData.launch_success ? 'Yes' : 'No'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
