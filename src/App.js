import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Use React.lazy to lazy load the components
const Flash = React.lazy(() => import('./pages/Flash'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Home = React.lazy(() => import('./pages/Home'));
const Planning = React.lazy(() => import('./pages/Planning'));
const FoodandDrink = React.lazy(() => import('./pages/FoodandDrink'));
const Shoppage = React.lazy(() => import('./pages/Shop'));
const Magnifiershop = React.lazy(() => import('./pages/Magnifiershop'));

const App = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Flash />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/planning' element={<Planning />} />
          <Route path='/foodanddrink' element={<FoodandDrink />} />
          <Route path='/shop' element={<Shoppage />} />
          <Route path='/magnifier' element={<Magnifiershop />} />
        </Routes>
      </Suspense>
  );
};

export default App;
