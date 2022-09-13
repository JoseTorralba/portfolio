import styled from 'styled-components';

export const SecondaryHeading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: ${props => props.mb};
  text-transform: uppercase;
  text-align: ${props => props.centered};
`;
