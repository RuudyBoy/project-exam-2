import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import bilde from "../images/bilde.jpg";

function HotelDetail() {
 const [hotel, setHotel] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();

 const { id } = useParams();

 if (!id) {
  history.push("/");
 }

 const url = BASE_URL + "hotels/" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);
     console.log(url);

     if (response.ok) {
      const json = await response.json();
      setHotel(json); 
      console.log(json);
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
  },
  [url]
 );

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>An error occured: {error}</div>;
 }

 return (
   <div className="hotel-background" >   
  <div className="hotel-info"> 
  <img className="image-hotel" src={bilde}></img>
   <div className="info-grid">
 
   <div className="hotel-text">
   <h1>{hotel.data.attributes.hotel}</h1>
   <hr></hr>
   <p>Bergen</p>
   <p>Rating:{hotel.data.attributes.rating}/10</p>
   
   <p className="text">{hotel.data.attributes.text}</p>
   </div>
   <div className="cta-enquiry">
   <p> Thon hotels</p>
   <p>{hotel.data.attributes.price} kr per night</p>
   <Link  to="/enquiry"className="cta-sendequiry"> Send enquiry</Link>
   </div>
   </div>
   <hr/>
  </div>
  </div>
 );
}

export default HotelDetail;