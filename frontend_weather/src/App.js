import './App.css';
import { Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import WeatherDetails from './pages/WeatherDetails';
import Layout from './templates/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Weather />} />
          <Route path="/weather/:cityId" element={<WeatherDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
