import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <div className="container">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;