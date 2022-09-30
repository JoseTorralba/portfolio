import { useEffect, useMemo, useRef } from 'react';
import {
  ProjectItem,
  ProjectsSection,
  ProjectsList,
  ProjectText,
} from './styles/Projects.styled';

import petsagram from '../media/petsagram.png';
import pokemonAPI from '../media/pokemon.jpg';
import carrierCrumbs from '../media/carriercrumbs.jpg';
import taskApp from '../media/task.jpg';
import turnBasedApp from '../media/rpg.jpg';
import monsterHunter from '../media/monhun.jpg';

import { useAnimation, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        duration: 1,
      });
    }
  }, [isInView, animation]);

  const projects = useMemo(
    () => [
      {
        name: 'Petsagram',
        description:
          'Allows users to create an account and post pictures of their furry friends. Created with React and Firebase to successfully create users, sign them in and upload posts.',
        thumbnail: petsagram,
        link: 'https://petsagram.vercel.app/',
      },

      {
        name: 'Pokemon API',
        description:
          'This app allows user input and send back information on any Pokemon using the PokeAPI. Used React and its core concepts to successfully fetch and display the data.',
        thumbnail: pokemonAPI,
        link: 'https://pokemon-dex-api.netlify.app/',
      },

      {
        name: 'Turn Based Combat',
        description:
          'Utilized React to create a turn based rpg battle with references to Bloodborne. Redux made it possible to manage multiple states and easily dispatch actions.',
        thumbnail: turnBasedApp,
        link: 'https://bloodborne-rpg.netlify.app/',
      },

      {
        name: 'Monster Field Guide',
        description:
          'Created a database collection in MongoDB containing every monster from Monster Hunter World. Used React and Next.js to display the fetched data.',
        thumbnail: monsterHunter,
        link: 'https://monster-field-guide.vercel.app/',
      },

      {
        name: 'Carrier Crumbs',
        description:
          'Designed and Developed this website for Carrier Crumbs, a Brooklyn based production company that works to enhance the careers of up and coming artists.',
        thumbnail: carrierCrumbs,
        link: 'https://torralbajose.com/',
      },

      {
        name: 'React Task List',
        description:
          'A task list app that takes user input and keeps track of their current task progress. Users can add, delete and edit tasks. Developed with React.',
        thumbnail: taskApp,
        link: 'https://react-tasklist-app.netlify.app/',
      },
    ],
    []
  );

  return (
    <ProjectsSection id='projects'>
      <h2>Projects</h2>

      <ProjectsList animate={animation} initial={{ opacity: 0 }} ref={ref}>
        {projects.map((project, i) => (
          <ProjectItem key={i}>
            <img src={project.thumbnail} alt='desc' />

            <ProjectText>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </ProjectText>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              View
            </a>
          </ProjectItem>
        ))}
      </ProjectsList>
    </ProjectsSection>
  );
};

export default Projects;
