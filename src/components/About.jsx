import { useEffect, useRef } from 'react';
import {
  AboutSection,
  AboutContent,
  AboutButtons,
} from './styles/About.styled';
import { useAnimation, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }
  }, [isInView, animation]);

  return (
    <AboutSection id='about'>
      <AboutContent animate={animation} initial={{ opacity: 0 }} ref={ref}>
        <h2>About Me</h2>
        <div>
          <p>
            I'm Jose Torralba, a front end web developer from New York City.
            <br />
            On my free time, I enjoy leveling in Final Fantasy XIV or go on long
            walks with my dogs.
          </p>

          <p>Feel free to view my repositories!</p>
        </div>

        <AboutButtons>
          <a
            href='https://github.com/JoseTorralba'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Repositories
          </a>
        </AboutButtons>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
