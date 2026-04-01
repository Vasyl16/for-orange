import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="wrap about-page">
      <h1>About FreshCart</h1>
      <p className="muted intro">
        FreshCart is a small demo online grocery shop. You can browse products,
        open each item for details, add food to your cart, change quantities, and
        see the order total — all in the browser.
      </p>

      <section className="about-block">
        <h2>What you can do</h2>
        <ul className="about-list">
          <li>Browse a list of groceries loaded from a mock API.</li>
          <li>Open a product page to read the full description.</li>
          <li>Add items to the cart, update quantities, or remove lines.</li>
          <li>See the total price update as your cart changes.</li>
        </ul>
      </section>

      <section className="about-block">
        <h2>How it is built</h2>
        <p className="muted">
          The app uses React state for the cart (a list of products and
          quantities). Product data is loaded with the browser{' '}
          <code>fetch</code> API.
        </p>
      </section>

      <p className="mt">
        <Link className="btn btn-primary" to="/contacts">
          Contact us
        </Link>
      </p>
    </div>
  );
}
