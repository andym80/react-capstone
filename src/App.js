import ReactPlayer from 'react-player/youtube';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
      <ReactPlayer
        src="https://www.youtube.com/watch?v=QnBscNAF4pg"
        autoPlay
        controls
        style={{ margin: 'auto', height: '25px', width: '50%' }}
      />
    </div>
  );
}

export default App;
