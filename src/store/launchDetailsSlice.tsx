import {createSlice} from '@reduxjs/toolkit';
import {detailsTypes} from '../types';
import {RootState} from './store';
const initialState: detailsTypes = {
  links: {},
  mission_name: '',
};

export const launchDetailsSlice = createSlice({
  name: 'launchDetails',
  initialState,
  reducers: {
    selectedMission: (state, {payload}) => payload,
    clearSelectedMission: () => ({links: {}, mission_name: ''}),
  },
});
export const selectLaunchDetails = ({launchDetails}: RootState): detailsTypes =>
  launchDetails;
export const {selectedMission, clearSelectedMission} =
  launchDetailsSlice.actions;
export default launchDetailsSlice.reducer;
