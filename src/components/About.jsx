// rafce
import { AboutSection, AboutButtons } from './styles/About.styled';
import { SecondaryHeading } from './styles/Headings.styled';

import resume from '../media/jose-torralba-resume.pdf';

const About = () => {
  return (
    <AboutSection>
      <SecondaryHeading mb='2rem'>About Me</SecondaryHeading>
      <div>
        <p>
          I'm Jose Torralba, a front end web developer from New York City.
          <br />
          On my free time, I enjoy playing Final Fantasy XIV or go on long walks
          with my dogs.
        </p>

        <p>Feel free to view my resume or my github repositories!</p>
      </div>

      <AboutButtons>
        <a href={resume} target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
        <a
          href='https://github.com/JoseTorralba'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </AboutButtons>
    </AboutSection>
  );
};

export default About;
