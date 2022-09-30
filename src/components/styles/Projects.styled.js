import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.div`
  grid-column: center-start / center-end;
  padding: 8em 0;

  h2 {
    color: var(--heading);
    font-size: 3rem;
    margin-bottom: 6rem;
    text-align: center;
  }
`;

export const ProjectsList = styled(motion.div)`
  display: grid;
  gap: 6rem;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 75em) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;

export const ProjectItem = styled.div`
  background-color: var(--accent);
  border-radius: 0.3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    display: block;
    user-select: none;
    width: 100%;
  }
  a {
    background-color: var(--project-btn);
    border: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    padding: 1.2rem 0;
  }
`;

export const ProjectText = styled.div`
  color: var(--text);
  padding: 3rem 3rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
