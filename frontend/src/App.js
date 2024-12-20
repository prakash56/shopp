import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter  , Routes,Route} from 'react-router-dom';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';
import Product from './Components/Pages/Product';
import ShopCategory from './Components/Pages/ShopCategory';
import LoginSignup from './Components/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

export const backend_url = 'https://shopper-api-uqo8.onrender.com';
export const currency = '₹';

function App() {
  return (
    
     <BrowserRouter>
     < div>
        <Navbar/>
     
     <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
     </Routes>
     <Footer />
     </div>
     </BrowserRouter>
    
  );
}

export default App;
