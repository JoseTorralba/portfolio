import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavContainer = styled(motion.div)`
  background-color: var(--gray);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #fff;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: fixed;
  user-select: none;
  width: 100%;
  z-index: 1000;

  div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  svg {
    filter: drop-shadow(0 2px 0.5px rgba(0, 0, 0, 0.4));
    margin-right: 1.4rem;
    width: 2rem;
    height: 2rem;

    path {
      fill: var(--icon);
    }
  }

  a {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 1.4rem;
    }
  }
`;

export const DarkModeToggle = styled.input.attrs(props => ({
  type: 'checkbox',
}))`
  cursor: pointer;
  position: relative;
  width: 3.5rem;
  height: 1.5rem;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 2rem;
  transition: all 0.2s;

  &:checked[type='checkbox'] {
    background: #66bb6a;
  }

  &::before {
    -webkit-appearance: none;
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    border-radius: 2rem;

    left: 0;
    border: 0.1px solid rgb(146, 146, 146);
    transition: all 0.2s;
  }

  &:checked[type='checkbox']::before {
    left: 2rem;
  }
`;
