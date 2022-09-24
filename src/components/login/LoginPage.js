import { FaHotel } from "react-icons/fa";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
		<div className="signin-background">
		<div>
			<p className="form-logo"> < FaHotel /> </p>
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