import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home Page/Home';
import Navbar from './Components/Navbar/Navbar';
import './Components/__animations.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
