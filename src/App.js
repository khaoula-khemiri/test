import './App.css';
import Home from './pages/Home';
import Table from './pages/Table';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes  >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/table" element={<Table />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
