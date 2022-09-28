import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
  background-color: var(--light-grey);
  color: #fff;

  font-size: 1.5rem;

  display: flex;

  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;

  padding: 1.5rem 2rem;
  /* align-items: center; */
  div {
    justify-content: center;
  }
  svg {
    filter: drop-shadow(0 2px 0.5px rgba(0, 0, 0, 0.4));
    margin-bottom: 0.5rem;
    width: 2rem;
    height: 2rem;

    path {
      fill: var(--primary);
    }

    &:hover {
      cursor: pointer;
    }
  }

  a {
    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
