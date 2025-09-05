import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h3 className="footer__brand">Little Lemon</h3>
            <p className="footer__meta">Chicago, IL</p>
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
            <ul className="footer__social">
              <li>
                <a className="social--instagram" href="https://instagram.com/placeholder" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a className="social--facebook" href="https://facebook.com/placeholder" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6V12h2.6V9.7c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a className="social--x" href="https://x.com/placeholder" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 2H22l-7.1 8.1L23.3 22h-6.9l-5.4-7.1L4.7 22H2l7.6-8.7L1 2h7l4.9 6.5L18.9 2zm-1.2 18h1.9L8.4 4H6.4l11.3 16z"/>
                  </svg>
                  <span className="sr-only">X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
