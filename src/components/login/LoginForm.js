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

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

    
	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

	  const [auth, setAuth] = useContext(AuthContext);
	  console.log(auth);
    
      async function onSubmit(data) {
		
		setSubmitting(true);
        setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url,  {
				identifier: data.email,
				password: data.password
			});
			console.log("response", response.data);
			console.log(data.email);
			console.log(url);
			console.log(data);
			setAuth(response.data);
			history.push("/dashboard");
			
		} catch (error) {
			console.log("error", error);
			console.log( error.response)
            setLoginError(error.toString());
		} finally {
			setSubmitting(false);
			console.log(false);
		}
	}

	
	return (
		<>
		
			<form className="form-design"onSubmit={handleSubmit(onSubmit)}>
			{submitting && <Alert variant="success"><p className="form-success"><FaCheckCircle/></p>You successfully signed in!</Alert>}
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
				<h1 className="form-title">Sign in</h1>
                <div>
				<label>Email</label>
                    <input name="email" type={"email"} {...register("email", { required: true, maxLength: 5})} />
					{errors.email && <FormError>{errors.email.message}</FormError>}
                </div>
				<div>
					<label>Password</label>
                    <input name="password"  type={"password"} {...register("password", { required: true })} />
					{errors.password && <FormError>{errors.password.message}</FormError>}
                </div>
            <button className="cta-form">{submitting ? "Signing in..." : "SIGN IN"}</button>
            </fieldset>
			</form>
		</>
	);
}