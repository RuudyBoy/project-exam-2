import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import bilde from "../../images/detail.jpg";

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
   async function fetchDetails() {
    try {
     const response = await fetch(url);

     if (response.ok) {
      const json = await response.json();
      setHotel(json); 
     } else {
      setError("An error occured");
     }
    } catch (error) {
     setError(error.toString());
    } finally {
     setLoading(false);
    }
   }
   fetchDetails();
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
  <div className="hoteldetails-container"> 
  <img className="hoteldetails-image" alt="hotel image" src={bilde}></img>
   <div className="detail-inner-grid">
   <div className="hoteldetails-text">
   <h1>{hotel.data.attributes.hotel}</h1>
   <hr></hr>
   <p>Bergen</p>
   <p>Rating:{hotel.data.attributes.rating}/10</p>
   <p className="hoteldetails-info">{hotel.data.attributes.text}</p>
   <Link to="/hotels" className="back-link" >Back to hotels page</Link>
   </div>
   <div className="details-sendenquiry">
   <p> Thon hotels</p>
   <p>{hotel.data.attributes.price} kr per night</p>
   <Link  to="/enquiry" className="cta-button"> Send enquiry</Link>
   </div>
   </div>
  </div>
  </div>
 );
}

export default HotelDetail;