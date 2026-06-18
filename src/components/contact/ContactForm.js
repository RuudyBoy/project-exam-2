import { BASE_URL } from "../../constants/api";
import { useState} from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import Heading from "../layout/Heading";
import { FaCheckCircle, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import { Alert } from "react-bootstrap";

const url =  BASE_URL + "messages";

const schema =yup.object({
    name: yup.string().required("Please enter your name").min(5,"The name must contain at least 5 characters"),
	email: yup.string().required("Please enter your email").email("Please enter a valid email address"), 
	message: yup.string().required("Please enter your message").min(10, "The message must contain at least 10 characters"),
  }).required();

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      async function onSubmit(data) {

		setSubmitted(true);
        setLoginError(null);
	
		try {
			const response = await axios.post(url, { "data": {
				 name: data.name,
                 email: data.email,
				 message: data.message
			}});
			
		} catch (error) {
            setLoginError(error.toString());
		} 
	}

	return (
		<div className="form-page-container">
			<form className="split-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-left">
					<h2>Send us a message</h2>
					{submitted && (
                        <div className="alert-success">
                            <p className="form-success"><FaCheckCircle/></p>
                            <div>
                                <strong style={{color: '#64FFDA', fontSize: '1.1rem'}}>Message sent successfully!</strong>
                                <p style={{margin: 0, fontSize: '0.9rem', color: '#8892B0'}}>We will get back to you shortly.</p>
                            </div>
                        </div>
                    )}
					{loginError && <FormError><FaExclamationCircle/> {loginError}</FormError>}
					<fieldset disabled={submitted}>
						<div>
							<label>Full name</label>
							<input name="name" {...register("name")} placeholder="John Doe" />
							{errors.name && <span><FaExclamationCircle style={{marginRight: '5px', marginTop: '-2px'}}/> {errors.name.message}</span>}
						</div>
						<div>
							<label>Email</label>
							<input name="email" {...register("email")} placeholder="john@example.com" />
							{errors.email && <span><FaExclamationCircle style={{marginRight: '5px', marginTop: '-2px'}}/> {errors.email.message}</span>}
						</div>
						<div>
							<label>Message</label>
							<textarea name="message" {...register("message")} placeholder="Write your message here..." rows="4" />
							{errors.message && <span><FaExclamationCircle style={{marginRight: '5px', marginTop: '-2px'}}/> {errors.message.message}</span>}
						</div>	
					</fieldset>
				</div>
				<div className="form-right">
					<h2>Contact Details</h2>
					<div className="contact-info-block">
                        <FaMapMarkerAlt className="info-icon" />
                        <div className="info-content">
                            <p className="info-label">Address</p>
                            <p className="info-value">Bryggen 1<br/>5003 Bergen, Norway</p>
                        </div>
					</div>
					<div className="contact-info-block">
                        <FaPhoneAlt className="info-icon" />
                        <div className="info-content">
                            <p className="info-label">Phone Number</p>
                            <p className="info-value">+47 55 55 55 55</p>
                        </div>
					</div>
					<div className="contact-info-block">
                        <FaEnvelope className="info-icon" />
                        <div className="info-content">
                            <p className="info-label">Email Address</p>
                            <p className="info-value">post@holidaze.no</p>
                        </div>
					</div>
					<button className="cta-button" type="submit" disabled={submitted}>
						Send Message <FaPaperPlane />
					</button>
				</div>
			</form>
		</div>
	);
}
