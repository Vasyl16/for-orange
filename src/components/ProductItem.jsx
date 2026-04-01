import { Link } from 'react-router-dom';

export default function ProductItem({ product, onAddToCart, compact }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h2>{product.name}</h2>
        <p className="muted" style={{ fontSize: 14, margin: 0 }}>
          {product.description}
        </p>
        <p className="price">${product.price.toFixed(2)}</p>
        {compact && (
          <Link
            className="btn"
            to={`/products/${product.id}`}
            style={{ width: '100%', textAlign: 'center' }}
          >
            Details
          </Link>
        )}
        <button
          type="button"
          className="btn btn-green"
          onClick={() => onAddToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
