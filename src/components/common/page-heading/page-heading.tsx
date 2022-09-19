import { PropsWithChildren } from 'react';
import * as S from './page-heading.styled';

function PageHeading ({ children, ...props }: PropsWithChildren):JSX.Element {
  return (
    <S.PageHeading {...props}>{children}</S.PageHeading>
  );
}

export default PageHeading;
