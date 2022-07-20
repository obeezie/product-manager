import logo from './logo.svg';
import './App.css';
import Product from './views/Product';
import { Link, Route, Routes } from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ItemView from './views/ItemView';
import EditItem from './views/EditItem';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/products/" element={<Product />} />
        <Route path="/products/:id" element={<ItemView />} />
        <Route path="/products/:id/edit" element={<EditItem />} />
      </Routes>
    </div>
  );
}

export default App;
