export default function Cart({ lines, total, onRemove, onUpdateQuantity }) {
  if (!lines.length) {
    return (
      <p className="muted center">Your cart is empty.</p>
    );
  }

  return (
    <div>
      <ul className="cart-list">
        {lines.map((line) => (
          <li key={line.product.id} className="cart-row">
            <img src={line.product.image} alt="" />
            <div className="grow">
              <strong>{line.product.name}</strong>
              <div className="muted" style={{ fontSize: 13 }}>
                ${line.product.price.toFixed(2)} each
              </div>
            </div>
            <label htmlFor={`qty-${line.product.id}`}>Qty</label>
            <input
              id={`qty-${line.product.id}`}
              className="qty-input"
              type="number"
              min="0"
              value={line.quantity}
              onChange={(e) => {
                const n = parseInt(e.target.value, 10);
                onUpdateQuantity(line.product.id, Number.isNaN(n) ? 0 : n);
              }}
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onRemove(line.product.id)}
            >
              Remove
            </button>
            <div style={{ minWidth: 72, textAlign: 'right' }}>
              ${(line.product.price * line.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="total-row">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
