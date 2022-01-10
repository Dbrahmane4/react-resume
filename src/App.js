import React from "react";
import Name from "./Name";
import Aboutme from './Aboutme';
import Keyskills from './Keyskills';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';
import Projects from './Projects';


function App() {
  return (
    <div className="grid-container">
      <Name/>
      <Aboutme/>
      <Keyskills/>
      <Education/>
      <Experience/>
      <Certification/>
      <Projects/>
    </div>
  );
}

export default App;
