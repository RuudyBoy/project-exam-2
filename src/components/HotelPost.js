import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/api";
import HotelItem from "./HotelItem";

const url = BASE_URL + "hotels?populate=*";

function HotelPost() {
 const [hotels, setHotels] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(url);
    console.log(url);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
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
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>Klikker</div>;
 }

 return ( 
   
    <div className="hotel">
     {hotels.map(function (hotel) {
      const {id, attributes} = hotel;
      console.log(hotel);
      return <HotelItem key={id}  id={id} image={attributes.image.data.attributes.url} price={attributes.price}  rating={attributes.rating}  text={attributes.text} title={attributes.hotel}  />;
     })}
    </div>
   );
}

export default HotelPost;