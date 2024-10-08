import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import BestSalerFull from './components/Body/BestSaler/BestSalerFull/BestSalerFull';
import WomenShoesFull from './components/Body/WomenShoes/WomenShoesFull/WomenShoesFull';
import BagsFull from './components/Body/Bag/Bags/BagsFull';
import SandalGirlFull from './components/Body/SandalGirl/SandalGirlFull/SandalGirlFull';
import SandalBoyFull from './components/Body/SandalBoy/SandalBoyFull/SandalBoyFull';
import Detail from './components/Body/Detail/Detail';
import { useState, useCallback } from 'react';
import BodyCart from './components/Body/BodyCart/BodyCart';

function App() {
  const [count, setCount] = useState(0);
  const handleTotalItem = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    handleTotalItem(); 
  };

  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/bestsalerfull' element={<BestSalerFull />} />
        <Route path='/womenshoesfull' element={<WomenShoesFull />} />
        <Route path='/bags' element={<BagsFull />} />
        <Route path='/sandalgirlfull' element={<SandalGirlFull />} />
        <Route path='/sandalboyfull' element={<SandalBoyFull />} />
        <Route path='/detail/:category/:id' element={<Detail onIncrease={addToCart} />} />
        <Route path='/bodycart' element={<BodyCart cartItems={cartItems}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
