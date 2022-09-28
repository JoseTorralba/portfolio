import styled from 'styled-components';
import { motion } from 'framer-motion';
import osa from '../../media/test.jpeg';

export const AboutImg = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4)
    ),
    url(${osa});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: full-start / col-end 3;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const AboutSection = styled(motion.div)`
  align-content: center;
  background-color: var(--light-grey);
  color: #fff;
  display: grid;
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: 400;
  grid-column: col-start 4 / full-end;
  padding: 6rem 12rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;

    &:not(:last-child) {
      margin-bottom: 1.4rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;

    padding: 6rem 10%;
    div {
      max-width: 50rem;
      margin: 0 auto;
    }
  }
`;

export const AboutButtons = styled.div`
  a {
    &:link,
    &:visited {
      margin-top: 3rem;
      display: inline-block;
    }

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-decoration: none;
    background-color: var(--primary);
    border-radius: 0.3rem;
    color: #000;
    padding: 1rem 4rem;

    &:not(:last-child) {
      margin-right: 3.5rem;
    }
  }
`;
