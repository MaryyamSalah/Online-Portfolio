
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import About from './Components/About/about';
import Projects from './Components/Projects/projects';
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact';
import Education from './Components/Education/education';
import Resume from './Components/Resume/resume';

function App(){

  return (
<div className="App">
      <BrowserRouter>
      
        <Header />
       
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/resume" element={<Resume />}/>
          
        </Routes>
       
        <Footer />
       
      </BrowserRouter>
    </div>
    
  );

}
export default App;