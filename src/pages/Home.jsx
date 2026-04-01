import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="wrap center">
      <h1>Welcome to FreshCart</h1>
      <p className="muted mb">
        A tiny grocery demo: browse products and use the cart.
      </p>
      <Link className="btn btn-primary" to="/products">
        Shop products
      </Link>
    </div>
  );
}
