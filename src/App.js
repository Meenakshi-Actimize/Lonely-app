import logo from './logo.svg';
import './App.css';
import Alertbox from './Component/Alertbox';
import Navbarcomp from './Component/Navbarcomp';
import Carouselcomp from './Component/Carouselcomp';
import Card1item from './Component/Card1item';

function App() {
  return (
    <div className="App">
     <Alertbox />
     <Navbarcomp />
     <Carouselcomp />
     <Card1item />
    </div>
  );
}

export default App;
