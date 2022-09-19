import { QuestType } from 'types/types';

const filterOnGenreQuestList = (questList: QuestType[], genre: string): QuestType[] => {

  let filteredList = questList;
  if (genre !== 'all-quests') {
    filteredList = questList.filter((quest) => quest.type === genre);
  }

  return filteredList;
};

export {filterOnGenreQuestList};
