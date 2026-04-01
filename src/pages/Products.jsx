import ProductList from '../components/ProductList.jsx';

export default function Products({ products, loading, error, onAddToCart }) {
  if (loading) {
    return (
      <div className="wrap center">
        <p className="muted">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="wrap">
        <div className="alert">{error}</div>
      </div>
    );
  }

  return (
    <div className="wrap">
      <h1>Products</h1>
      <ProductList
        products={products}
        onAddToCart={onAddToCart}
        emptyMessage="No products."
      />
    </div>
  );
}
