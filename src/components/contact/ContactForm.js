import { BASE_URL } from "../../constants/api";
import { useState} from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
//import FormError from "../common/FormError";
import Heading from "../layout/Heading";
import { FaCheckCircle, FaSignInAlt } from "react-icons/fa";
import { Alert } from "react-bootstrap";





const url =  BASE_URL + "messages";


const schema =yup.object({
    name: yup.string().required("Please enter your name").min(5,"The name must contain at least 5 characters"),
	email: yup.string().required("Please enter your email").email("Please enter a valid email address"), 
	message: yup.string().required("Please enter your message").min(10, "The message must contain at least 10 characters"),
  }).required();

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	//const [loginError, setLoginError] = useState(null);
	
    

	

    
	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    
      async function onSubmit(data) {

		setSubmitted(true);
        //setLoginError(null);
	
		console.log(data);

		try {
			const response = await axios.post(url, { "data": {
				 name: data.name,
                 email: data.email,
				 message: data.message
			}
               
            });
			console.log("response", response.data);
			console.log(url);
			console.log(data);



			
		} catch (error) {
			console.log("error", error);
			console.log( error.response)
            //setLoginError(error.toString());
		} 
	}

	
	return (
		<>
		{submitted && <Alert variant="success">Message sent <p className="form-success"><FaCheckCircle/></p> </Alert>}
			<form className="form-design"onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={submitted}>
			<Heading className="form-title" title="Contact" />
                <div>
					<label>Full name</label>
                    <input name="name" {...register("name")} />
					{errors.name && <span>{errors.name.message}</span>}
                </div>
				<div>
				<label>Email</label>
                    <input name="email"  {...register("email")} />
					{errors.email && <span>{errors.email.message}</span>}
                </div>
				<div>
					<label>Message</label>
                    <textarea name="message"  {...register("message")} />
					{errors.message && <span>{errors.message.message}</span>}
                </div>
            <button className="cta-form" type="submit"> Send message <FaSignInAlt/></button>
            </fieldset>
			</form>
		</>
	);
}








