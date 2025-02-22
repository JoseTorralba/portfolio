import { motion } from 'framer-motion';
import { ReactComponent as GithubIcon } from '../media/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../media/icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../media/icons/email.svg';

import {
  HeaderContainer,
  TextBox,
  PrimaryHeading,
  SubHeading,
  Button,
  Socials,
} from './styles/Header.styled';

import { Link } from 'react-scroll';

const Header = () => {
  const socialList = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const socialItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8 },
    },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <HeaderContainer id='header'>
      <TextBox>
        <motion.div
          initial={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            <PrimaryHeading>Jose Torralba</PrimaryHeading>
            <SubHeading>Front-End Web Developer</SubHeading>
          </h1>
        </motion.div>

        <Button
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {/* Fix Offset */}
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            View Projects
          </Link>
        </Button>

        <Socials initial='hidden' animate='visible' variants={socialList}>
          <motion.li variants={socialItem}>
            <a
              href='https://github.com/JoseTorralba'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </a>
          </motion.li>

          <motion.li variants={socialItem}>
            <a
              href='https://www.linkedin.com/in/jose-torralba/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon />
            </a>
          </motion.li>

          <motion.li variants={socialItem}>
            <a
              href='mailto:jose.ttorralba@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <EmailIcon />
            </a>
          </motion.li>
        </Socials>
      </TextBox>
    </HeaderContainer>
  );
};

export default Header;
