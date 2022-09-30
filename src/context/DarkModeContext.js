import { createContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeHandler = () => setDarkMode(prevState => !prevState);

  return (
    <DarkModeContext.Provider value={{ darkMode, themeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
