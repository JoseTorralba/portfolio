import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { NavContainer } from './styles/Navbar.styled';
import { AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

import { ReactComponent as SunIcon } from '../media/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../media/icons/moon.svg';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition >= 650) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  }, [scrollPosition]);

  const darkModeHandler = prevState => setDarkMode(prevState => !prevState);

  return (
    <>
      <AnimatePresence>
        {toggleNav && (
          <NavContainer
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ y: -300, opacity: 0 }}
          >
            {!darkMode ? (
              <SunIcon onClick={darkModeHandler} />
            ) : (
              <MoonIcon onClick={darkModeHandler} />
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
