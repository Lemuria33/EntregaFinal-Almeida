import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './Context/CartProvider';
import CartItems from './Components/Cart/CartItems';
import Checkout from './Components/Cart/Checkout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Tienda Lemuria!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoría:"/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={ <CartItems /> } />
          <Route path="/cart/checkout/:orderId" element={<Checkout />} />
        </Routes>
        </CartContextProvider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
