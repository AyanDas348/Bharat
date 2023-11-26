import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import HomePage from './Homepage';
import Navbar from './component/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Modules from './pages/Modules';
import Courses from './pages/Courses';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/module" exact element={<Modules />} />
          <Route path="/courses" exact element={<Courses />} />
        </Routes>
    </Router>
  );
};

export default App;
