import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
    <nav className="navbar">
        <strong>Synergy</strong>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
    </nav>
    );
}

export default Navbar;