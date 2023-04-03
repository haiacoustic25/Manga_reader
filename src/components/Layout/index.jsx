import React, { useContext } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { ThemeContext } from '../../context/ThemeContext';

const LayoutFull = ({ children, colorFooter, isSearch, isLogoFooter, backgroundColor }) => {
  const { theme } = useContext(ThemeContext);
  console.log({ theme });
  return (
    <div className={theme == 'dark' && 'dark'}>
      <Header isSearch={isSearch} background={backgroundColor} />
      <div>{children}</div>
      <Footer colorFooter={colorFooter} isLogo={isLogoFooter} />
    </div>
  );
};

export default LayoutFull;
