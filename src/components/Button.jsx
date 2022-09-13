import styled from 'styled-components';

const ButtonStyle = styled.a`
  background-color: var(--primary);
  border: none;
  border-radius: 0.3rem;
  color: #000;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.2rem 4rem;
`;

const Button = ({ text }) => {
  return <ButtonStyle href='#projects'>{text}</ButtonStyle>;
};

export default Button;
