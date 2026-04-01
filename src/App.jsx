import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { fetchProducts } from './services/api.js';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';

function cartTotal(lines) {
  return lines.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );
}

function cartItemCount(lines) {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /** Each item: { product, quantity } */
  const [cart, setCart] = useState([]);

  // product loading logic
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      });
  }, []);

  function addToCart(product) {
    setCart((prev) => {
      const i = prev.findIndex(
        (line) => String(line.product.id) === String(product.id),
      );
      if (i >= 0) {
        const next = [...prev];
        next[i] = {
          ...next[i],
          quantity: next[i].quantity + 1,
        };
        return next;
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) =>
      prev.filter((line) => String(line.product.id) !== String(productId)),
    );
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((line) =>
        String(line.product.id) === String(productId)
          ? { ...line, quantity }
          : line,
      ),
    );
  }

  const total = cartTotal(cart);
  const items = cartItemCount(cart);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="site-header">
          <div className="container header-bar">
            <NavLink className="brand" to="/" end>
              <span className="brand-mark" aria-hidden="true">
                🛒
              </span>
              FreshCart
            </NavLink>
            <nav className="header-nav" aria-label="Main">
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/"
                end
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/cart"
              >
                Cart
                {items > 0 && <span className="badge">{items}</span>}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active' : '')
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  loading={loading}
                  error={error}
                  onAddToCart={addToCart}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetail
                  products={products}
                  loading={loading}
                  onAddToCart={addToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  lines={cart}
                  total={total}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="container">FreshCart — demo store</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
