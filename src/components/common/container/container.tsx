import { PropsWithChildren } from 'react';
import * as S from './container.styled';


function Container ({ children, ...props }: PropsWithChildren): JSX.Element {
  return (
    <S.Container {...props}>{children}</S.Container>
  );
}

export default Container;
