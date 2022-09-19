import { ThemeProvider } from 'styled-components';
import {
  Route,
  Routes,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import HistoryRouter from 'components/history-router/history-router';
import browserHistory from 'components/browser-history';
import NotFound from 'components/not-found/not-found';
import { useAppSelector } from 'hooks/hooks';
import { getQuestsLoadedStatus } from 'store/site-data/selectors';
import LoadingScreen from 'components/loading-screen/loading-screen';
import { AppRoute } from 'const';

export default function App ():JSX.Element {

  const dataLoadedStatus = useAppSelector(getQuestsLoadedStatus);

  if (dataLoadedStatus === true) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history= {browserHistory}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <Routes>
          <Route
            path={AppRoute.DetailedQuest} element={<DetailedQuest />}
          >
          </Route>
          <Route
            path={AppRoute.Contacts} element={<Contacts />}
          >
          </Route>
          <Route
            path={AppRoute.Main} element={<Home />}
          >
          </Route>
          <Route
            path={AppRoute.NotFound} element={<NotFound />}
          >
          </Route>
        </Routes>
      </ThemeProvider>
    </HistoryRouter>
  );
}

