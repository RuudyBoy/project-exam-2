import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/api";

function HotelPost() {
 const [hotels, setHotels] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(BASE_URL);
    console.log(BASE_URL);

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
  <>
   {hotels.map(function(hotel) {
    return <div key={hotel.id}><p>{hotel.attributes.text}</p></div>;
   })}
  </>
 );
}

export default HotelPost;