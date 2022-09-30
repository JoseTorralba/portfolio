import { Link } from 'react-scroll';
import { FooterStyles } from './styles/Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
      &copy; {currentYear} Designed & Developed by
      <Link to='header' smooth={true} duration={1000}>
        &nbsp;Jose Torralba
      </Link>
    </FooterStyles>
  );
};

export default Footer;
