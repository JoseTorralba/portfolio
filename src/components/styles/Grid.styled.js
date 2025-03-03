import styled from 'styled-components';

export const Grid = styled.div`
  background-color: var(--project-bg);
  display: grid;
  grid-template-rows: 100vh repeat(4, min-content);
  grid-template-columns:
    [full-start] minmax(auto, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  /* transition: background-color 0.1s; */
`;
