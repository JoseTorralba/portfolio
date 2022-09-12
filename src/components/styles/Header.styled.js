import styled from 'styled-components';
import backgroundImg from '../../media/header.jpg';

export const HeaderContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
  display: grid;
  color: #fff;
  grid-column: full-start / full-end;
`;

export const TextBox = styled.div`
  color: #fff;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const PrimaryHeading = styled.span`
  color: #fff;
  display: block;
  font-size: 8rem;
  text-align: center;
`;

export const SubHeading = styled.span`
  color: var(--primary);
  display: block;
  font-size: 4rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  padding: 4rem 0;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  p:not(:last-child) {
    margin-right: 25px;
  }
`;
