import React, { useContext } from 'react';
import About from './about/About';
import { Contact } from './contact/Contact';
import { ThemeContext } from './context';
import Intro from './intro/Intro';
import Toggle from './toggle/Toggle';
import LearnList from './learnlist/LearnList';


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggle/>
      <Intro/>
      <About/>
      <LearnList/>
      <Contact/>
    </div>
  );
}

export default App;
