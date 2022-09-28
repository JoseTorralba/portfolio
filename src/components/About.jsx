import { useEffect } from 'react';
import resume from '../media/jose-torralba-resume.pdf';
import { AboutSection, AboutButtons } from './styles/About.styled';

// Animation
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,

        transition: {
          duration: 0.4,
        },
      });
    }
  }, [inView, animation]);

  return (
    <AboutSection
      id='about'
      animate={animation}
      initial={{ opacity: 0 }}
      ref={ref}
    >
      <div>
        <h2>About Me</h2>
        <div>
          <p>
            I'm Jose Torralba, a front end web developer from New York City.
            <br />
            On my free time, I enjoy learning extreme and savage content in
            Final Fantasy XIV or go on long walks with my dogs.
          </p>

          <p>Feel free to view my resume or all of my repositories!</p>
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
      </div>
    </AboutSection>
  );
};

export default About;
