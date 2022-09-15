import styled from 'styled-components';

export const SkillsSection = styled.div`
  background-color: var(--washed);
  grid-column: center-start / center-end;
  padding: 6rem 0;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const SkillsBox = styled.div`
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
      margin-bottom: 0.5rem;
      width: 6.5rem;
      height: 6.5rem;

      path {
        /* fill: var(--light-grey); */
      }
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
