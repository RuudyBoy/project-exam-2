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





const url =  BASE_URL + "hotels?populate=*";


const schema =yup.object({
    hotel: yup.string().required(),
    rating: yup.number().required(),
    text: yup.string().required(),
  }).required();

export default function NewHotel() {
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
				hotel: data.hotel,
                rating: data.rating,
				text: data.text,
                image: data.image}
			}
               
            );
			console.log("response", response.data);
			console.log(url);
			console.log(data);
			if (response) {
				
			}
			

			
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
			<Heading classhotel="form-title" title="Contact" />
                <div>
					<label>Hotel name</label>
                    <input name="hotel" type={"hotel"} {...register("hotel", { required: true, maxLength: 5})} />
					{errors.hotel && <FormError>This field is required</FormError>}
                </div>
                <div>
					<label>Hotel image</label>
                    <input name="image" type={"file"} {...register("image", { required: true, maxLength: 5})} />
					{errors.hotel && <FormError>This field is required</FormError>}
                </div>
                <div>
				<label>Hotel Rating</label>
                    <input name="rating" type={"rating"}  {...register("rating", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
				<div>
					<label>Hotel info</label>
                    <input name="message" type={"text"} {...register("text", { required: true })} />
					{errors.message && <FormError>This field is required</FormError>}
                </div>
            <button className="cta-form">{submitting ? "New hotel Created " : "Create new Hotel"} <FaSignInAlt/></button>
            </fieldset>
			</form>
		</>
	);
}