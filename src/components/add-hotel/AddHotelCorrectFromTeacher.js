/*
Tilbakemedling fra læreren tilfelle jeg mister tilgang

Some solid work here but also several issues. As you mention in your report the image upload on the Add hotel form does not work. You need to use formData to upload files. 
Here is an example: https://github.com/NoroffFEU/uploading-an-image-to-strapi Because it is still possible to create a hotel without an image, and your code assumes the existence of the image, 
your GetHotel component throws an error when adding new hotels. To fix this, check if the hotel has an image before trying to access the image properties. 
I have uploaded an edited version of your GetHotel.js file as example of how to fix this. 
- The Add hotel form is missing validation for Rating and Info. Ideally there would be more information added to a hotel than what is on this form.
 - The persons and Other neccesary information inputs on the enquiry form have no validation messages - The forms should be cleared after successful submission.
 - Be sure to properly format your code on future projects. Even using "Format on save" in VSCode settings will be a help or you can use tools like Prettier. 
 - Many components (maybe all?) are missing prop-type checks

"This file is orginally called GetHotel from the teacher so maybe this code should be replacing the GetHotel.js or here, uncertain of that."

*/

import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import HotelItem from "./HotelItem";
import logo from "../../images/holidazeform128.png";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons"
import { faHospitalWide } from "@fortawesome/free-regular-svg-icons"

const url = BASE_URL + "hotels?populate=*";

function GetHotel() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(url);

				if (response.ok) {
					const json = await response.json();
					setHotels(json.data);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="loading-text">
				<img className="logo" src={logo} alt="Logo" />
				<h2>Finding Hotels...</h2>
			</div>
		);
	}

	if (error) {
		return setError("We have problems finding hotels, try to refresh the site:)");
	}

	return (
		<div className="hotel-container">
			{hotels.map(function (hotel) {
				const { id, attributes } = hotel;

				// set a default image url
				let imageUrl = "https://via.placeholder.com/150";

				// if the hotel has an image assign it to imageUrl
				if (attributes.image.data) {
					imageUrl = attributes.image.data.attributes.url;
				}

				console.log(hotel);
				return (
					<HotelItem
						key={id}
						id={id}
						image={imageUrl}
						price={attributes.price}
						rating={attributes.rating}
						text={attributes.text}
						title={attributes.hotel}
					/>
				);
			})}
		</div>
	);
}

export default GetHotel;
