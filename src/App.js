import './App.css';
import ProductScreen from './screens/AdminScreen/Product/ProductScreen';
// import Login from './screens/Login/Login';
import Layout from './screens/Layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes path="/" element={<Layout />}>

        <Route index path="/admin-login" element={<ProductScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
