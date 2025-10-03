import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect} from 'react';
import CheckoutPage from './pages/checkout/CheckoutPage';
import HomePage from './pages/home/HomePage'
import OrdersPage from './pages/orders/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });

  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>

  );
}

export default App
