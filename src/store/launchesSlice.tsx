import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';
import {launchDataTypes} from '../types';
interface launchStateTypes {
  status: string;
  launches: launchDataTypes[];
}
const initialState: launchStateTypes = {
  status: '',
  launches: [],
};

export const fetchLaunches = createAsyncThunk(
  'launches/fetchFromSpaceX',
  async () => {
    try {
      const launchData = await fetch('https://api.spacex.land/graphql', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          query: `{
                              launchesPast(limit: 20) {
                                  mission_name
                                  launch_date_local
                                  launch_site {
                                      site_name_long
                                  }
                                  links {
                                    article_link
                                    video_link
                                  }
                                  rocket {
                                      rocket_name
                                  }
                                  launch_success
                                  details
                              }
                          }`,
        }),
      })
        .then(rawLaunchData => rawLaunchData.json())
        .then(fetchedLaunchData => fetchedLaunchData.data.launchesPast);
      return launchData;
    } catch (err) {
      throw err;
    }
  },
);
export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLaunches.pending, state => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchLaunches.fulfilled, (state, {payload}) => ({
      ...state,
      status: 'success',
      launches: [...state.launches, ...payload],
    }));
    builder.addCase(fetchLaunches.rejected, state => ({
      ...state,
      status: 'failed',
    }));
  },
});
export const selectLaunches = ({launches}: RootState): launchStateTypes =>
  launches;
export default launchesSlice.reducer;
