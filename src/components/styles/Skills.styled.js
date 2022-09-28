import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.div`
  background-color: var(--primary-light);
  grid-column: full-start / full-end;
  padding: 6rem 0;
  h2 {
    color: var(--light-grey);
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media only screen and (max-width: 37.5em) {
    h2 {
      text-align: center;
    }
  }
`;

export const SkillsContainer = styled(motion.div)`
  max-width: 114rem;
  margin: 0 auto;

  @media only screen and (max-width: 75em) {
    padding: 0 2%;
  }
`;

export const SkillsList = styled(motion.div)`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 4rem 0;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem 0;

  div {
    justify-content: center;
    text-align: center;

    svg {
      filter: drop-shadow(0 2px 0.5px rgba(0, 0, 0, 0.4));
      margin-bottom: 0.5rem;
      width: 6.5rem;
      height: 6.5rem;

      path {
        /* fill: var(--primary); */
      }
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 20em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
