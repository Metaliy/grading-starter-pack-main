import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, ToastMessages } from 'const';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppDispatch, State } from 'types/state';
import { PostQuestOrderType, QuestType } from 'types/types';


export const fetchQuestsAction = createAsyncThunk<QuestType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<QuestType[]>(APIRoute.Quests);
      return data;
    } catch (error) {
      toast.error(ToastMessages.LoadError);
      throw error;
    }
  },
);


export const fetchDetailedQuestAction = createAsyncThunk<QuestType, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchDetailedQuest',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<QuestType>(generatePath(APIRoute.Quest, {id}));
      return data;
    } catch (error) {
      toast.error(ToastMessages.LoadError);
      throw error;
    }
  },
);

export const postQuestOrderAction = createAsyncThunk<void, PostQuestOrderType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postOrder',
  async (order, {extra: api}) => {
    try {
      await api.post(APIRoute.Orders, order);
      toast.success(ToastMessages.PostSucces);
    }
    catch(error) {
      toast.error(ToastMessages.PostError);
      throw error;
    }
  }
);
