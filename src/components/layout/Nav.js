import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../images/holidazehvittekst64.png";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);
	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<Navbar className="navbar fixed-top" expand="lg">
			<Container fluid>
				<Link className="navbar-brand" to="/">
					<img className="logo" src={logo} alt="Holidaze Logo" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/hotels">Hotels</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/about">About</Link>
						
						{auth ? (
							<>
								<span className="nav-divider">|</span>
								<Link to="/dashboard">Dashboard</Link>
								<button className="cta-nav" onClick={logout}>Sign Out</button>
							</>
						) : (
							<Link className="cta-nav" to="/signin">Sign In</Link>
						)}
					</nav> 
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Nav;
