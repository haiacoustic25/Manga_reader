import React, { useState } from 'react';
export const ThemeContext = React.createContext('light');
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const handleChangeThemeDarkMode = (theme) => {
    setTheme(theme);
  };
  const value = { theme, handleChangeThemeDarkMode };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
