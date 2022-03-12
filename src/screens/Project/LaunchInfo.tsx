import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles';
import {detailsTypes} from '../../types';
import {missionDetails} from '../../constants/constants';
interface LaunchInfoProps {
  setOpenLaunchInfo: (flag: boolean) => void;
  selectedMission: detailsTypes;
}

export const LaunchInfo = ({
  setOpenLaunchInfo,
  selectedMission,
}: LaunchInfoProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpenLaunchInfo(false)}>
        <View style={styles.backWrapper}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{selectedMission.mission_name}</Text>
      </View>
      <View style={styles.detailsWrapper}>
        {selectedMission.details ? (
          <Text>{selectedMission.details}</Text>
        ) : (
          <Text>{missionDetails.noDetails}</Text>
        )}
      </View>
      {selectedMission.links.article_link ? (
        <View style={styles.linkWrapper}>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(selectedMission.links.article_link as string)
            }>
            {missionDetails.articleLink}
          </Text>
        </View>
      ) : null}
      {selectedMission.links.video_link ? (
        <View style={styles.linkWrapper}>
          <Text
            style={styles.linkText}
            onPress={() =>
              Linking.openURL(selectedMission.links.video_link as string)
            }>
            {missionDetails.videoLink}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  titleWrapper: {
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsWrapper: {
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.gray,
  },
  linkWrapper: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  backWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: colors.black,
    width: 70,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});
