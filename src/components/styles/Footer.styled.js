import styled from 'styled-components';

export const FooterStyles = styled.div`
  background-color: var(--gray);
  color: #fff;
  grid-column: full-start / full-end;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 3rem;
  text-align: center;

  a {
    color: var(--primary);
    text-decoration: none;
  }
`;
