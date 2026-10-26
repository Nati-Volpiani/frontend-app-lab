import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
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