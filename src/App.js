import logo from './logo.svg';
import './App.css';
import Product from './views/Product';
import { Link, Route, Routes } from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ItemView from './views/ItemView';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/products/" element={<Product />} />
        <Route path="/products/:id" element={<ItemView />} />
      </Routes>
    </div>
  );
}

export default App;
