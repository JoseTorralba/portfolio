import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Grid } from './components/styles/Grid.styled';

import GlobalStyles from './components/styles/Global';
import AboutImage from './components/AboutImage';
import About from './components/About';
function App() {
  return (
    <>
      <GlobalStyles />

      <Grid>
        <Header />
        <Projects />
        <AboutImage />
        <About />
        <Footer />
      </Grid>
    </>
  );
}

export default App;
