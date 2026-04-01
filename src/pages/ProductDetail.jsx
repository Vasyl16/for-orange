import { Link, useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem.jsx';

export default function ProductDetail({ products, loading, onAddToCart }) {
  const { id } = useParams();

  if (loading) {
    return (
      <div className="wrap center">
        <p className="muted">Loading…</p>
      </div>
    );
  }

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="wrap">
        <p className="muted">Product not found.</p>
        <Link className="btn mt" to="/products">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        {' / '}
        <Link to="/products">Products</Link>
        {' / '}
        {product.name}
      </div>
      <div style={{ maxWidth: 320, margin: '0 auto' }}>
        <ProductItem product={product} onAddToCart={onAddToCart} />
      </div>
      <p className="center mt">
        <Link to="/products">← All products</Link>
      </p>
    </div>
  );
}
