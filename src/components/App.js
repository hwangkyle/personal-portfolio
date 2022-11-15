import '../css/App.css';
import Head from './Head';
import Projects from './Projects';
import Experiences from './Experiences';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      {/* <img
        id="bg"
        src={require("../assets/img/static.gif")}
        alt="background static"
      ></img> */}
      <div id="scroll-container">
        <Head />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  );
}

export default App;
