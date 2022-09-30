import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage(false, 'darkMode');
  const themeHandler = () => setDarkMode(prevState => !prevState);

  return (
    <DarkModeContext.Provider value={{ darkMode, themeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
