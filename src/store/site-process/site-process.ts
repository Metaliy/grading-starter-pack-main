import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'const';
import { SiteProcessType } from 'types/state';


const initialState: SiteProcessType = {
  selectedGenre: 'all-quests'
};

export const siteProcess = createSlice ({
  name: NameSpace.Site,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.selectedGenre = action.payload;
    }
  }
});

export const {changeGenre} = siteProcess.actions;
