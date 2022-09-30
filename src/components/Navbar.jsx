import { Link } from 'react-scroll';
import { useContext, useEffect, useState } from 'react';
import { NavContainer } from './styles/Navbar.styled';
import { AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

import { ReactComponent as SunIcon } from '../media/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../media/icons/moon.svg';
import DarkModeContext from '../context/DarkModeContext';

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
            {darkMode ? (
              <SunIcon onClick={themeHandler} />
            ) : (
              <MoonIcon onClick={themeHandler} />
            )}

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
