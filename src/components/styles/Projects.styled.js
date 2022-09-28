import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.div`
  grid-column: center-start / center-end;
  padding: 6rem 0;
`;

export const ProjectsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 6rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

export const ProjectItem = styled.div`
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    display: block;
    width: 100%;
  }
  a {
    background-color: var(--light-grey);
    border: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    padding: 1.2rem 0;
    display: block;
    cursor: pointer;
  }
`;

export const ProjectText = styled.div`
  padding: 3rem 3rem;
  background-color: #fff;

  h1 {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
