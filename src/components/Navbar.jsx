import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/home">Inicio</Link>
        </li>
      </ul>

      <Link to="/cart" className="navbar__cart">
        <FaShoppingCart size={22} />
        {cartCount > 0 && (
          <span className="navbar__badge">{cartCount}</span>
        )}
      </Link>
    </nav>
  );
};

