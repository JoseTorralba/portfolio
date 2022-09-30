import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImg from '../../media/header.jpg';

export const HeaderContainer = styled.div`
  align-items: center;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  display: grid;
  color: #fff;
  grid-column: full-start / full-end;

  @media only screen and (max-width: 56.25em) {
    background-attachment: scroll;
    background-position: right;
  }
`;

export const TextBox = styled.div`
  color: #fff;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const PrimaryHeading = styled.span`
  color: #fff;
  display: block;
  font-size: 8rem;
  text-align: center;

  @media only screen and (max-width: 56.25em) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 3.5rem;
  }
`;

export const SubHeading = styled.span`
  color: var(--primary);
  display: block;
  font-size: 4rem;
  text-align: center;

  @media only screen and (max-width: 56.25em) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 20em) {
    font-size: 1.6rem;
  }
`;

export const Button = styled(motion.div)`
  margin: 3rem 0;

  a {
    display: inline-block;
    background-color: var(--primary);
    border: none;
    border-radius: 0.3rem;
    color: #000;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 1.2rem 4rem;
  }
`;

export const Socials = styled(motion.ul)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    path {
      fill: #fff;
    }
  }

  li:not(:last-child) {
    margin-right: 2rem;
  }
`;
