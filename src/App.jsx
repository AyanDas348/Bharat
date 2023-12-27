import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import Testimonial from './pages/Testimonial';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/testimonial" exact element={<Testimonial />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
