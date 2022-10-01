import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';
import { NavContainer, DarkModeToggle } from './styles/Navbar.styled';
import { useScrollPosition } from '../hooks/useScrollPosition';
import DarkModeContext from '../context/DarkModeContext';
import { ReactComponent as SunIcon } from '../media/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../media/icons/moon.svg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { darkMode, themeHandler } = useContext(DarkModeContext);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    scrollPosition >= 650 ? setShowNav(true) : setShowNav(false);
  }, [scrollPosition]);

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <NavContainer
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <div>
              {!darkMode ? <SunIcon /> : <MoonIcon />}

              <DarkModeToggle checked={darkMode} onClick={themeHandler} />
            </div>

            <div>
              <Link to='projects' smooth={true} duration={1000}>
                Projects
              </Link>

              <Link to='about' smooth={true} duration={1000}>
                About
              </Link>

              <Link to='skills' smooth={true} duration={1000}>
                Skills
              </Link>
            </div>
          </NavContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
