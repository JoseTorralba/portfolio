import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1.2rem 4rem;
`;

const Button = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
