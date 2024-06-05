import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css'


import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact.jsx';


function App() {
 
  return (
    <>
        <Header/>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>

        <Footer/>
    </>
  )
}

export default App
