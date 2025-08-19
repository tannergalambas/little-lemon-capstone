import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <h3>Little Lemon</h3>
          <p>Chicago, IL</p>
        </div>

        <nav aria-label="Doormat navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>

        <div>
          <h4>Contact</h4>
          <p>contact@littlelemon.example</p>
          <p>(312) 555-1234</p>
        </div>

        <div>
          <h4>Social</h4>
          <p>IG / FB / X</p>
        </div>
      </div>
    </footer>
  );
}