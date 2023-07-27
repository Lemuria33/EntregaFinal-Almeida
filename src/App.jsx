import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Tienda Lemuria!"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Categoría:"/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
