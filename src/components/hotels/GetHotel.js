import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import HotelItem from "./HotelItem";
import logo from "../../images/holidazeform128.png"


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
  return <div className="loading-text">
   <img className="logo" src={logo} alt="Logo" />
   <h2>Finding Hotels...</h2>
   </div>;
 }

 if (error) {
  return setError("We have problems finding hotels, try to refresh the site:)");
 }

 return ( 
   
    <div className="hotel-container">
     {hotels.map(function (hotel) {
      const {id, attributes} = hotel;
      console.log(hotel);
      return <HotelItem key={id}  id={id} image={attributes.image.data.attributes.url} price={attributes.price}  rating={attributes.rating}  text={attributes.text} title={attributes.hotel}  />;
     })}
    </div>
   );
}

export default GetHotel;