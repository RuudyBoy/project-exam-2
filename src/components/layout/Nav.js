import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";




function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}
	return (
		<nav>
			<Link to="/">Home</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About </Link>
			{auth ? (
				<>
					|<Link to="/enquiry">Enquiry</Link> <Link to="/admin">Messages</Link>  <Link to="/dashboard">Dashboard</Link>  <button className="cta-login" onClick={logout}>Log out</button>
				</>
			) : (
				<Link className="cta-login"  to="/login"> LOGIN</Link>
			)}
			
		</nav>
	);
}

export default Nav;