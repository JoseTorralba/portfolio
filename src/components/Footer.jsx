import { FooterStyles } from './styles/Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
      &copy; {currentYear} Designed & Developed by <a href='/'>Jose Torralba</a>
    </FooterStyles>
  );
};

export default Footer;
