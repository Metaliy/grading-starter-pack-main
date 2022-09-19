import { createSlice } from '@reduxjs/toolkit';
import { ToastMessages, NameSpace } from 'const';
import { toast } from 'react-toastify';
import { fetchDetailedQuestAction, fetchQuestsAction } from 'store/api-actions';
import { SiteDataType } from 'types/state';
import { QuestType } from 'types/types';

export const initialState: SiteDataType = {
  quests: [],
  IsQuestsLoading: false,
  detailedQuest: {} as QuestType,
  isDetailedQuestLoading: false
};

export const siteData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.IsQuestsLoading = true;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.IsQuestsLoading = false;
        toast.error(ToastMessages.LoadError);
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.IsQuestsLoading = false;
        state.quests = action.payload;
      })
      .addCase(fetchDetailedQuestAction.pending, (state) => {
        state.isDetailedQuestLoading = true;
      })
      .addCase(fetchDetailedQuestAction.rejected, (state) => {
        state.isDetailedQuestLoading = false;
        toast.error(ToastMessages.LoadError);
      })
      .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
        state.isDetailedQuestLoading = false;
      });
  }
});
