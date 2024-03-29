import styled from 'styled-components';

export const FooterStyles = styled.div`
  background-color: var(--gray);
  color: #fff;
  grid-column: full-start / full-end;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 3rem;
  text-align: center;

  p {
    margin-bottom: 0.8rem;
  }

  a {
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
  }
`;
