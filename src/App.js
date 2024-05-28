import logo from './logo.svg';
import './App.css';
import Flash from './pages/Flash';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Dummy from './Component/Dummy';





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


      </Routes>    
    </>
  )
}

export default App;