import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
  align-items: center;
  background-color: var(--gray);
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: fixed;
  user-select: none;
  width: 100%;
  z-index: 1000;

  svg {
    filter: drop-shadow(0 2px 0.5px rgba(0, 0, 0, 0.4));
    margin-bottom: 0.5rem;
    width: 2.2rem;
    height: 2.2rem;

    path {
      fill: var(--icon);
    }

    &:hover {
      cursor: pointer;
    }
  }

  a {
    &:not(:last-child) {
      margin-right: 1.4rem;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
