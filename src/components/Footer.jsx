import { Link } from 'react-scroll';
import { FooterStyles } from './styles/Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
      <p>
        &copy; {currentYear} Designed & Developed by
        <Link to='header' smooth={true} duration={1000}>
          &nbsp;Jose Torralba
        </Link>
      </p>

      <a
        href='https://github.com/JoseTorralba/portfolio'
        target='_blank'
        rel='noopener noreferrer'
      >
        View Portfolio Source Code
      </a>
    </FooterStyles>
  );
};

export default Footer;
