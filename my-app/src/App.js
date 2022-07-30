import './App.css';
import Navbar from './components/Navbar';
import UpHeader from './components/UpHeader';
import Slider from './components/Slider';
import Products from './components/Products';



function App() {
  return (
    <div className="App">
        <UpHeader/>
        <Navbar/>
        <Slider/>
        <Products/>
      
    </div>
  );
}

export default App;
