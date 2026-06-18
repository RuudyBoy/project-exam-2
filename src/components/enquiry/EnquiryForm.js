import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import { FaCheckCircle, FaSignInAlt } from "react-icons/fa";
import { Alert } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const schema =yup.object({
    name: yup.string().required("Please enter your name").min(5,"The name must contain at least 5 characters"),
    email: yup.string().required("Please enter your email").email("Please enter a valid email address"),
    arrival: yup.date().required("Please enter when you arrive").typeError("Please enter a valid date"),
    departure: yup.date().required("Please enter when you will leave").typeError("Please enter a valid date"),
    persons:yup.number().required("Please registrer how many persons you will be").min(1,"You must be at least 1 person").typeError("Please enter a valid number"),
    information: yup.string().required("Please provide necessary information"),
  }).required();

export default function SendEnquiry() {

	const [submitted, setSubmitted] = useState(false);
	const [loginError, setLoginError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hotelName = searchParams.get("hotel") || "Holidaze Hotel";
	
	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

      async function onSubmit(data) {
        setLoginError(null);
        setSubmitting(true);
	
		try {
            // Simulate network request since backend API is offline
			await new Promise((resolve) => setTimeout(resolve, 800));
            setSubmitted(true);
		} catch (error) {
            setLoginError(error.toString());
		} finally {
            setSubmitting(false);
        }
	}

	return (
		<div className="form-page-container">
			<form className="split-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-left">
					<h2>Enquiry for {hotelName}</h2>
					{submitted && <Alert variant="success"><p className="form-success"><FaCheckCircle/></p>Enquiry sent successfully!</Alert>}
					{loginError && <FormError>{loginError}</FormError>}
					<fieldset disabled={submitted || submitting}>
						<div>
							<label>Full name</label>
							<input name="name" type="text" {...register("name")} placeholder="John Doe" />
							{errors.name && <span>{errors.name.message}</span>}
						</div>
						<div>
							<label>Email</label>
							<input name="email" type="email" {...register("email")} placeholder="john@example.com" />
							{errors.email && <span>{errors.email.message}</span>}
						</div>
						<div style={{ display: 'flex', gap: '20px' }}>
							<div style={{ flex: 1 }}>
								<label>Arrival</label>
								<input name="arrival" type="date" {...register("arrival")} />
								{errors.arrival && <span>{errors.arrival.message}</span>}
							</div>
							<div style={{ flex: 1 }}>
								<label>Departure</label>
								<input name="departure" type="date" {...register("departure")} />
								{errors.departure && <span>{errors.departure.message}</span>}
							</div>
						</div>
						<div>
							<label>Persons</label>
							<input name="persons" type="number" {...register("persons")} placeholder="2" />
							{errors.persons && <span>{errors.persons.message}</span>}
						</div>
						<div>
							<label>Other necessary information</label>
							<textarea name="information" type="text" {...register("information")} placeholder="Any special requests or allergies?" rows="4" />
							{errors.information && <span>{errors.information.message}</span>}
						</div>
					</fieldset>
				</div>
				<div className="form-right">
					<h2>Booking Info</h2>
					<div className="contact-info-block">
						<p className="info-label">Check-in time</p>
						<p className="info-value">From 14:00</p>
					</div>
					<div className="contact-info-block">
						<p className="info-label">Check-out time</p>
						<p className="info-value">Until 11:00</p>
					</div>
					<div className="contact-info-block">
						<p className="info-label">Cancellation policy</p>
						<p className="info-value border-0 pb-0 mb-4">Free cancellation up to 48 hours before arrival.</p>
					</div>
					
					<button className="cta-button" type="submit" disabled={submitted || submitting} style={{ marginBottom: '20px' }}>
						{submitting ? "Sending..." : <>Send enquiry <FaSignInAlt style={{marginLeft: '5px'}}/></>}
					</button>

					<div style={{ marginTop: 'auto', textAlign: 'left' }}>
						<Link to="/hotels" className="back-link" style={{ color: '#ffffff' }}>&larr; Back to hotels page</Link>
					</div>
				</div>
			</form>
		</div>
	);
}