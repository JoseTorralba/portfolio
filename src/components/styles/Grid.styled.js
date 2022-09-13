import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  /* Auto is for the navbar */
  /* grid-template-rows: auto 100vh repeat(4, min-content); */
  grid-template-rows: 100vh repeat(4, min-content);
  grid-template-columns:
    [full-start] minmax(auto, 1fr)
    [center-start] repeat(
      8,
      [col-start] minmax(min-content, 1fr) [col-end]
    ) [center-end] 1fr [full-end];
  /* grid-template-columns:
    [full-start] minmax(auto, 1fr)
    [center-start] repeat(14, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end]; */
`;
