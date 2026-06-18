import { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import { Alert } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const url =  BASE_URL + TOKEN_PATH;

const schema =yup.object({
	email: yup.string().required("Please enter your email").email("Please enter a valid email address"),
    password: yup.string().required("Please enter your password").min(4, "password must contain at least 4 characters").matches("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})", "Please enter a valid password"),
  }).required();

export default function SigninForm() {
    const [submitting, setSubmitting] = useState(false);
	const [signinError, setSigninError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

	  const [auth, setAuth] = useContext(AuthContext);
	  console.log(auth);
    
      async function onSubmit(data) {
		
		setSubmitting(true);
        setSigninError(null);

		try {
			const response = await axios.post(url,  {
				identifier: data.email,
				password: data.password
			});
		
			setAuth(response.data);
			history.push("/dashboard");
			
		} catch (error) {
            setSigninError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}
	
	return (
		<div className="form-page-container">
			<form className="split-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-left">
					<h2>Sign In</h2>
					{submitting && <Alert variant="success"><p className="form-success"><FaCheckCircle/></p>You successfully signed in!</Alert>}
					{signinError && <FormError>{signinError}</FormError>}
					<fieldset disabled={submitting}>
						<div>
							<label>Email</label>
							<input name="email" type={"email"} {...register("email", { required: true, maxLength: 5})} placeholder="Enter your email" />
							{errors.email && <span>{errors.email.message}</span>}
						</div>
						<div>
							<label>Password</label>
							<input name={"password"} type={"password"} {...register("password", { required: true })} placeholder="Enter your password" />
							{errors.password && <span>{errors.password.message}</span>}
						</div>
					</fieldset>
				</div>
				<div className="form-right">
					<h2>Welcome Back!</h2>
					<div className="contact-info-block">
						<p className="info-label">Access your account</p>
						<p className="info-value" style={{border: 'none', lineHeight: '1.5'}}>Sign in to manage your bookings and explore exclusive hotel deals in Bergen.</p>
					</div>
					<button className="cta-button" type="submit" disabled={submitting}>
						{submitting ? "Signing in..." : "SIGN IN"}
					</button>
				</div>
			</form>
		</div>
	);
}