import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { getDetailedQuestLoadedStatus, getDetailedQuestData } from 'store/site-data/selectors';
import { useParams } from 'react-router-dom';
import { fetchDetailedQuestAction } from 'store/api-actions';
import { Difficulty, questGenres } from 'const';

function DetailedQuest ():JSX.Element {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const param = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetailedQuestAction(`${param.id}`));
  }, [dispatch, param.id]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const dataLoadedStatus = useAppSelector(getDetailedQuestLoadedStatus);

  const detailedQuest = useAppSelector(getDetailedQuestData);

  if (dataLoadedStatus === true || !detailedQuest.id) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${detailedQuest.coverImg}`}
          alt={detailedQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{detailedQuest.title}</S.PageTitle>
            <S.PageSubtitle>{questGenres[detailedQuest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{detailedQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${detailedQuest.peopleCount.join('-')} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{Difficulty[detailedQuest.level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {detailedQuest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened &&
          <BookingModal
            setIsBookingModalOpened={setIsBookingModalOpened}
            peopleCount={detailedQuest.peopleCount}
          />}
      </S.Main>
    </MainLayout>
  );
}

export default DetailedQuest;
