import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from './Pages/Cart';
import Product from './Pages/Product.jsx';
import Shop from './Pages/Shop.jsx';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/ipads' element={<ShopCategory category="ipads" />} />
          <Route path='/laptops' element={<ShopCategory category="laptops" />} />
          <Route path='/phones' element={<ShopCategory category="phones" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
