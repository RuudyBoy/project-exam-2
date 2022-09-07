import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/home">Home</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
			<Link to="/login">Login</Link>
		</nav>
	);
}

export default Nav;