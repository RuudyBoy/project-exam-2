import { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Heading from '../layout/Heading';



 const url =  BASE_URL + "messages";


const schema =yup.object({
    name: yup.string().required(),
    message: yup.string().required(),
    subject: yup.string().required(),
  }).required();

export default function ContactForm() {
	
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
			const response = await axios.post(url, {data : {
                "message": "nytt hotell",
                "subject": "hotellbooking",
                "name": "Kåre"
            }} );
			console.log("response", response.data);
			console.log(url);
			console.log(data);
			setAuth(response.data);
			history.push("/admin");
			
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
			<Heading className="form-title" title="Contact" />
                <div>
					<label>Full name</label>
                    <input name="name" {...register("name", { required: true, maxLength: 5})} />
					{errors.name && <FormError>This field is required</FormError>}
                </div>
                <div>
				<label>subject</label>
                    <input name="subject" {...register("subject", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
				<div>
					<label>Message</label>
                    <input name="message" {...register("message", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
            <button className="cta-form">{submitting ? "Sending message..." : "Send"}</button>
            </fieldset>
			</form>
		</>
	);
}
