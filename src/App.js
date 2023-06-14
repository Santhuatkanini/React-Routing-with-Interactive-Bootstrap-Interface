import {Routes, Route} from "react-router-dom";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Team from "./component/Team";
import NotFound from './component/NotFound';

function App() {
  return (
    <>
    <Navbar />

    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
