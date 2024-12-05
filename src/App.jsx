import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndiaMap from './components/Map/Map';
import StatePage from './components/StatePage' // Import the StatePage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route
          // path="/"
          element={
            <div>
              <h2>Click On A State To Learn More</h2>
              <IndiaMap />
              <h4>Created By Maahir Vohra</h4>
            </div>
          }
        />
        {/* Dynamic Route for States */}
        <Route path="/state/:stateName" element={<StatePage />} />
      </Routes>
    </Router>
  );
};

export default App;
