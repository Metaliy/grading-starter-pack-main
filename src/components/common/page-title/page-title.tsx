import { PropsWithChildren } from 'react';
import * as S from './page-title.styled';

function PageTitle ({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.PageTitle {...props}>{children}</S.PageTitle>
  );
}

export default PageTitle;
