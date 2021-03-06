import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="app">
     <Topbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
