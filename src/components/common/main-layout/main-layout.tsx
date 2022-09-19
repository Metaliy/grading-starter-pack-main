import { Header, Footer } from 'components/common/common';
import { PropsWithChildren } from 'react';

function MainLayout ({ children }: PropsWithChildren):JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
