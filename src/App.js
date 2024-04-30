import logo from './logo.svg';
import './App.css';
import Alertbox from './Component/Alertbox';
import Navbarcomp from './Component/Navbarcomp';
import Carouselcomp from './Component/Carouselcomp';
import Card1item from './Component/Card1item';
import Card2items from './Component/Card2items';

function App() {
  return (
    <div className="App">
     <Alertbox />
     <Navbarcomp />
     <Carouselcomp />
     <Card1item />
     <Card2items />
    </div>
  );
}

export default App;
