import ProductItem from './ProductItem.jsx';

export default function ProductList({ products, onAddToCart, emptyMessage }) {
  if (!products.length) {
    return <p className="muted center">{emptyMessage}</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          compact
        />
      ))}
    </div>
  );
}
