import Header from './components/Header';
import Projects from './components/Projects';
import { Grid } from './components/styles/Grid.styled';

import GlobalStyles from './components/styles/Global';
function App() {
  return (
    <>
      <GlobalStyles />

      <Grid>
        <Header />
        <Projects />
      </Grid>
    </>
  );
}

export default App;
