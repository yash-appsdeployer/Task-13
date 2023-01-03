import './App.css';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import NavBar from './Components/Navbar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Service />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
