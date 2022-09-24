import { FaHotel } from "react-icons/fa";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import logo from "../../images/holi128.png"

export default function LoginPage() {
	return (
		<>
		<div className="signin-background">
		<div>
		<img className="form-logo" src={logo} alt="Logo" />
			<p >  </p>
			<h1 className="logo-login">Holidaze</h1>
		</div>
		<div>
			<Heading content="Sign in" />
			<LoginForm />
		</div>
			</div>
		</>
	);
}