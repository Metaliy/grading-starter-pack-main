import { store } from 'store';
import { QuestType } from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type SiteProcessType = {
  selectedGenre: string,
};

export type SiteDataType = {
  quests: QuestType[],
  IsQuestsLoading: boolean,
  detailedQuest: QuestType,
  isDetailedQuestLoading: boolean
};

export type OrderPostProcessType = {
  orderSentStatus: boolean
};
