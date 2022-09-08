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

const url =  BASE_URL + TOKEN_PATH;


const schema =yup.object({
	email: yup.string().required().email(),
    password: yup.string().matches("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})","Please enter your password"),
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
				identifier: "project@exam.com",
				password: "Exam2022"
			});
			console.log("response", response.data);
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
            {loginError && <FormError>{loginError}</FormError>}
            <fieldset disabled={submitting}>
                <div>
                    <input name="email" {...register("email", { required: true, maxLength: 5})} />
					{errors.email && <FormError>This field is required</FormError>}
                </div>
				<div>
                    <input name="password" {...register("password", { required: true })} />
					{errors.password && <FormError>This field is required</FormError>}
                </div>
            <button className="cta-login">{submitting ? "Loggin in..." : "Login"}</button>
            </fieldset>
			</form>
		</>
	);
}