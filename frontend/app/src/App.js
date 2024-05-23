import './App.css';
import NavigationBar from './components/navigation-bar/NavigationBar';
import Slider from './components/slider/Slider';
import LeftAdContainer from './components/ads/LeftAd.Container';


function App() {
  return (
    <div>
      <NavigationBar />
      <Slider />
      <LeftAdContainer/>
    </div>
  );
}

export default App;
