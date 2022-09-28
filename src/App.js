import GlobalStyles from './components/styles/Global';
import { Grid } from './components/styles/Grid.styled';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutImage from './components/AboutImage';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

import { AnimationProvider } from './context/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <GlobalStyles />
      <Navbar />
      <Grid>
        <Header />
        <Projects />
        <AboutImage />
        <About />
        <Skills />
        <Footer />
      </Grid>
    </AnimationProvider>
  );
}

export default App;
