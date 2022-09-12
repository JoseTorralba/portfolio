import Button from './Button';

import {
  HeaderContainer,
  TextBox,
  PrimaryHeading,
  SubHeading,
  ButtonContainer,
  Socials,
} from './styles/Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <TextBox>
        <h1>
          <PrimaryHeading>Jose Torralba</PrimaryHeading>
          <SubHeading>Front-End Web Developer</SubHeading>
        </h1>

        <ButtonContainer>
          <Button text={'Projects'} />
        </ButtonContainer>

        <Socials>
          <p>Email</p>
          <p>LinkedIn</p>
          <p>Github</p>
        </Socials>
      </TextBox>
    </HeaderContainer>
  );
};

export default Header;
