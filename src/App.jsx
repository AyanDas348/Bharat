import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import HomePage from './Homepage';
import Navbar from './component/Navbar';

const App = () => {
  console.log('i ran');
  return (
    <Router>
      <div className='flex w-full h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeContent/>} />
          <Route path="/:type" exact element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
