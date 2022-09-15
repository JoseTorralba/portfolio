import { SkillsSection, SkillsBox } from './styles/Skills.styled';
import { ReactComponent as HtmlIcon } from '../media/icons/html.svg';
import { ReactComponent as CssIcon } from '../media/icons/css.svg';
import { ReactComponent as JavascriptIcon } from '../media/icons/javascript.svg';
import { ReactComponent as GithubIcon } from '../media/icons/github.svg';
import { ReactComponent as GitIcon } from '../media/icons/git.svg';
import { ReactComponent as VscodeIcon } from '../media/icons/vscode.svg';
import { ReactComponent as PhotoshopIcon } from '../media/icons/photoshop.svg';
import { ReactComponent as IllustratorIcon } from '../media/icons/illustrator.svg';
import { ReactComponent as BootstrapIcon } from '../media/icons/bootstrap.svg';
import { ReactComponent as SassIcon } from '../media/icons/sass.svg';
import { ReactComponent as JqueryIcon } from '../media/icons/jquery.svg';
import { ReactComponent as TailwindIcon } from '../media/icons/tailwind.svg';
import { ReactComponent as NpmIcon } from '../media/icons/npm.svg';
import { ReactComponent as ReactIcon } from '../media/icons/react.svg';
import { ReactComponent as ReduxIcon } from '../media/icons/redux.svg';
import { ReactComponent as NextIcon } from '../media/icons/next.svg';
import { ReactComponent as MongoIcon } from '../media/icons/mongodb.svg';
import { ReactComponent as FirebaseIcon } from '../media/icons/firebase.svg';

const Skills = () => {
  return (
    <SkillsSection>
      <h2>The Tools I Use</h2>
      <SkillsBox>
        <div>
          <HtmlIcon />
          <p>HTML5</p>
        </div>
        <div>
          <CssIcon />
          <p>CSS3</p>
        </div>
        <div>
          <JavascriptIcon />
          <p>JavaScript</p>
        </div>
        <div>
          <GithubIcon />
          <p>Github</p>
        </div>
        <div>
          <GitIcon />
          <p>Git</p>
        </div>
        <div>
          <VscodeIcon />
          <p>VS Code</p>
        </div>
        <div>
          <PhotoshopIcon />
          <p>Photoshop</p>
        </div>
        <div>
          <IllustratorIcon />
          <p>Illustrator</p>
        </div>
        <div>
          <BootstrapIcon />
          <p>Bootstrap</p>
        </div>
        <div>
          <SassIcon />
          <p>SASS</p>
        </div>
        <div>
          <JqueryIcon />
          <p>jQuery</p>
        </div>
        <div>
          <TailwindIcon />
          <p>Tailwind CSS</p>
        </div>
        <div>
          <NpmIcon />
          <p>NPM</p>
        </div>
        <div>
          <ReactIcon />
          <p>React</p>
        </div>
        <div>
          <ReduxIcon />
          <p>Redux</p>
        </div>
        <div>
          <NextIcon />
          <p>Next.js</p>
        </div>
        <div>
          <MongoIcon />
          <p>MongoDB</p>
        </div>
        <div>
          <FirebaseIcon />
          <p>Firebase</p>
        </div>
      </SkillsBox>
    </SkillsSection>
  );
};

export default Skills;
