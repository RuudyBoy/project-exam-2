import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
		<div className="login-container">
		<div>
			<h1 className="logo-login">Holzinger</h1>
			<p>Logo her</p>
		</div>
		<div>
			<Heading content="Login" />
			<LoginForm />
		</div>
			</div>
		</>
	);
}