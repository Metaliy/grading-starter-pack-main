import { NameSpace } from 'const';
import { State } from 'types/state';
import { QuestType } from 'types/types';


export const getQuests = (state: State): QuestType[] => state[NameSpace.Data].quests;

export const getQuestsLoadedStatus = (state: State): boolean => state[NameSpace.Data].IsQuestsLoading;

export const getDetailedQuestData = (state: State): QuestType => state[NameSpace.Data].detailedQuest;

export const getDetailedQuestLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDetailedQuestLoading;
