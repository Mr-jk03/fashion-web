import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import BestSalerFull from './components/Body/BestSaler/BestSalerFull/BestSalerFull';
import WomenShoesFull from './components/Body/WomenShoes/WomenShoesFull/WomenShoesFull';
import BagsFull from './components/Body/Bag/Bags/BagsFull';
import SandalGirlFull from './components/Body/SandalGirl/SandalGirlFull/SandalGirlFull';
import SandalBoyFull from './components/Body/SandalBoy/SandalBoyFull/SandalBoyFull';
import Detail from './components/Body/Detail/Detail';
function App() {
  return (
    
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/bestsalerfull' element={<BestSalerFull />}/>
        <Route path='/womenshoesfull' element={<WomenShoesFull />}/>
        <Route path='/bags' element={<BagsFull />}/>
        <Route path='/sandalgirlfull' element={<SandalGirlFull />}/>
        <Route path='/sandalboyfull' element={<SandalBoyFull />}/>
        <Route path='/detail' element={<Detail />}/>
        <Route path='/detail/:category/:id' element={<Detail />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
