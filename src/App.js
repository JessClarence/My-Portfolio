import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//pages
import {Home} from "./pages/Home";
import {Portfolio} from "./pages/Portfolio";
import {Resume} from "./pages/Resume";
//components
import {Navbar} from "./components/Navbar"

function App() {
  return (
    <div className='font-body bg-primary'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Portfolio" element={<Portfolio />}/>
          <Route path="/Resume" element={<Resume />}/>
        </Routes>
      </Router>
    </div>
  )

}

export default App;
