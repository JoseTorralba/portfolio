import styled from 'styled-components';
import { motion } from 'framer-motion';
import osa from '../../media/images/osa.jpeg';

export const AboutImg = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4)
    ),
    url(${osa});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  grid-column: full-start / col-end 3;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const AboutSection = styled.div`
  align-content: center;
  background-color: var(--about-bg);
  color: #fff;
  display: grid;
  font-size: 1.4rem;
  font-weight: 400;
  grid-column: col-start 4 / full-end;
  line-height: 1.7;
  padding: 6rem 12rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;
    padding: 6rem 10%;
  }
`;

export const AboutContent = styled(motion.div)`
  @media only screen and (max-width: 56.25em) {
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const AboutButtons = styled.div`
  margin-top: 1.5rem;
  a {
    &:link,
    &:visited {
      display: inline-block;
      background-color: var(--primary);
      border-radius: 0.3rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      color: #000;
      display: inline-block;
      padding: 0.6rem 4rem;
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: 2.5rem;
    }

    @media only screen and (max-width: 25.875em) {
      padding: 1rem 3rem;

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    @media only screen and (max-width: 20em) {
      padding: 1rem 0;
      width: 100%;
      text-align: center;

      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 1.2rem;
      }
    }
  }
`;
