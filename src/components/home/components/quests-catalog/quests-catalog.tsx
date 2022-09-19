import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useAppSelector } from 'hooks/hooks';
import { getQuests } from 'store/site-data/selectors';
import { AppRoute, Difficulty, questGenres } from 'const';
import { store } from 'store';
import { changeGenre } from 'store/site-process/site-process';
import { getSelectedGenre } from 'store/site-process/selectors';
import { filterOnGenreQuestList } from 'utils';
import { generatePath } from 'react-router-dom';

function QuestsCatalog ():JSX.Element {


  const handleChangeGenreClick = (genre: string) => { store.dispatch(changeGenre(genre));};

  const questList = useAppSelector(getQuests);

  const selectedGenre = useAppSelector(getSelectedGenre);

  const renderQuestGenreIcon = (genre: string) => {
    switch (genre) {
      case 'all-quests':
        return <IconAllQuests />;
      case 'horror':
        return<IconHorrors />;
      case 'mystic':
        return <IconMystic />;
      case 'detective':
        return <IconDetective />;
      case 'sci-fi':
        return <IconScifi />;
      case 'adventures':
        return <IconAdventures />;
    }
  };

  return (
    <>
      <S.Tabs>

        {Object.keys(questGenres).map((genre) => (
          <S.TabItem key={genre} onClick={() => handleChangeGenreClick(genre)}>
            <S.TabBtn isActive={String(selectedGenre) === String(genre)}>
              {renderQuestGenreIcon(genre)}
              <S.TabTitle>{questGenres[genre]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>

      <S.QuestsList>
        {filterOnGenreQuestList(questList, selectedGenre).map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={generatePath(AppRoute.DetailedQuest, {id: String(quest.id)})}>
              <S.Quest>
                <S.QuestImage
                  src={quest.coverImg}
                  width="344"
                  height="232"
                  alt={`квест ${quest.id}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {`${quest.peopleCount.join('-')} чел`}
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {Difficulty[quest.level]}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        )

        )}


      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
