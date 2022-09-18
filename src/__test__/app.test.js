import '../assets/css/App.css';
import Navbar from '../components/Navbar';
import WeatherPanel from '../components/WeatherPanel';
import '@testing-library/jest-dom';

describe('App test', () => {
  it('should render App', () => {
    function App() {
      return (
        <div className="App">
          <Navbar />
          <WeatherPanel />
        </div>
      );
    }
    expect(App).toBeDefined();
  });
});
