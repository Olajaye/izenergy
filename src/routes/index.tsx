import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Products from '../pages/Products';
import BlogPost from '../pages/BlogPost';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<BlogPost/>} />
    </Routes>
  );
};

export default AppRoutes;