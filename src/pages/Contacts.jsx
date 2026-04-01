import { Link } from 'react-router-dom';

export default function Contacts() {
  return (
    <div className="wrap contacts-page">
      <h1>Contacts</h1>
      <p className="muted intro">
        Demo contact details for FreshCart. Replace these with real information
        for your project.
      </p>

      <div className="contact-cards">
        <section className="contact-card">
          <h2>Email</h2>
          <p>
            <a href="mailto:hello@freshcart.demo">hello@freshcart.demo</a>
          </p>
        </section>
        <section className="contact-card">
          <h2>Phone</h2>
          <p>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
          </p>
        </section>
        <section className="contact-card">
          <h2>Address</h2>
          <p className="muted">
            123 Market Street
            <br />
            Demo City, DC 10000
          </p>
        </section>
        <section className="contact-card">
          <h2>Hours</h2>
          <p className="muted">
            Mon–Sat: 8:00 – 20:00
            <br />
            Sun: 10:00 – 16:00
          </p>
        </section>
      </div>

      <p className="mt">
        <Link to="/about">← About</Link>
      </p>
    </div>
  );
}
