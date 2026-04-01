import { Link } from 'react-router-dom';
import CartView from '../components/Cart.jsx';

export default function CartPage({
  lines,
  total,
  onRemove,
  onUpdateQuantity,
}) {
  return (
    <div className="wrap">
      <h1>Your cart</h1>
      <CartView
        lines={lines}
        total={total}
        onRemove={onRemove}
        onUpdateQuantity={onUpdateQuantity}
      />
      <p className="mt">
        <Link className="btn" to="/products">
          Continue shopping
        </Link>
      </p>
    </div>
  );
}
