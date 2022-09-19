import { BASE_URL } from "../../constants/api";
import { useState} from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import Heading from "../layout/Heading";
import { FaSignInAlt } from "react-icons/fa";





const url =  BASE_URL + "enquiries";


const schema =yup.object({
    name: yup.string().required(),
    number: yup.number().typeError("Please enter a number").required(),
    email: yup.string().required().email(),
    arrival: yup.date().required(),
    departure: yup.date().required(),
    information: yup.string().required(),
  }).required();

export default function SendEnquiry() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	
    

	

    
	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    
      async function onSubmit(data) {

		setSubmitting(true);
        setLoginError(null);
	
		console.log(data);

		try {
			const response = await axios.post(url, { "data": {
                 name: data.name,
                 number: data.number, 
                 email: data.email,
                 arrival: data.arrival,
                 departure: data.departure,
                 information: data.information
			}});

			console.log("response", response.data);
			console.log(url);
			console.log(data);
			
			

			
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
			<Heading classname="form-title" title="Send enquiry" />
                <div>
					<label>Name</label>
                    <input name="name" type={"name"} {...register("name", { required: true, maxLength: 5})} />
					{errors.name && <FormError>This field is required</FormError>}
                </div>
                <div>
                <label>Number</label>
                    <input name="number" type={"number"} {...register("number", { required: true, maxLength: 5})} />
					{errors.email && <FormError>This field is required</FormError>}
                </div>
                <div>
                <label>Email</label>
                    <input name="email" type={"email"} {...register("email", { required: true, maxLength: 5})} />
					{errors.email && <FormError>This field is required</FormError>}
                </div>
                <div>
				<label>Arrival</label>
                    <input name="arrival" type={"date"}  {...register("arrival", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
				<div>
					<label>Departure</label>
                    <input name="departure" type={"date"}  {...register("departure", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
                <div>
					<label>Other neccesary information</label>
                    <input name="information" type={"text"} {...register("information", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
            <button className="cta-form">{submitting ? "New name Created " : "Create new name"} <FaSignInAlt/></button>
            </fieldset>
			</form>
		</>
	);
}