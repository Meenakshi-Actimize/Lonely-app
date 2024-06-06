import logo from './logo.svg';
import './App.css';
import Flash from './pages/Flash';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Dummy from './Component/Dummy';
import Planning from './pages/Planning';
import FoodandDrink from './pages/FoodandDrink';
import Shoppage from './pages/Shop';





// function App() {
//   return (

// //       <BrowserRouter>
// //         <div className="App">
// //           <Routes>
// //         <Route path='/' element={<Home/>} />
// //         <Route path='/signup' element={<Signup />} />
// //         </Routes>
// //         </div>

// //         </BrowserRouter>
      
// //   );
// // }


//   )}

// const App = () => {
//   return(
//     <>
//     <Routes>
//       <Route path='/' element={<Flash />} />
//       <Route path='/home' element={<Home />} />
//       <Route path='/signup' element={<Signup />} />
//     </Routes>
//     </>
//   )
// }



const App = () =>{
  return(
    <>
      <Routes>
        <Route path='/flash' element={<Flash />}  />
        <Route path='/signup' element={<Signup />}  />
        <Route path='/home' element={<Home />}  />
        <Route path='/planning' element={<Planning />} />
        <Route path='/foodanddrink' element={<FoodandDrink />} />
        <Route path='/shop' element={<Shoppage />} />


      </Routes>    
    </>
  )
}

export default App;