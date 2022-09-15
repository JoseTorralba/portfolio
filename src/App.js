import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutImage from './components/AboutImage';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Grid } from './components/styles/Grid.styled';

function App() {
  return (
    <>
      <GlobalStyles />

      <Grid>
        <Header />
        <Projects />
        <AboutImage />
        <About />
        <Skills />
        <Footer />
      </Grid>
    </>
  );
}

export default App;
