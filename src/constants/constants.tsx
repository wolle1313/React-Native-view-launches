export const APIStatus = {
  failed: 'Something went wrong',
  loading: 'Loading...',
};

type launchDataTitlesTypes =
  | 'MISSIONNAME'
  | 'LAUNCHDATE'
  | 'LAUNCHSITENAME'
  | 'ROCKETNAME'
  | 'LAUNCHSUCCESS';

export const launchDataTitles: Record<launchDataTitlesTypes, string> = {
  MISSIONNAME: 'Mission Name',
  LAUNCHDATE: 'Launch Date',
  LAUNCHSITENAME: 'Launch Site Name',
  ROCKETNAME: 'Rocket Name',
  LAUNCHSUCCESS: 'Was Launch Successful',
};

export const loadLaunchesBtn = {
  firstLoad: 'Load 20 launch records',
  anotherLoad: '20 more launch records',
};
export const results = {
  noResults: 'No Results :(',
};
export const missionDetails = {
  noDetails: 'There are no details about this mission',
  articleLink: 'Article Link',
  videoLink: 'Video Link',
};
