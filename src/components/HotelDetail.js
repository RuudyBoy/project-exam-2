import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/api";

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
  <div className="hotel-info">
   <div className="info-grid">
   <div className="hotel-text">
   <h1>{hotel.data.attributes.hotel}</h1>
   <p>Rating:{hotel.data.attributes.rating}/5</p>
   <p>Kykkelsrudveien 47, Askim 1815</p>
   <p className="text">{hotel.data.attributes.text}</p>
   </div>
   <div className="cta-enquiry">
   <p>2 adults, 1 room</p>
   <p> 12.aug-14.aug</p>
   <Link  to="/enquiry"className="cta-sendequiry"> Send enquiry</Link>
   </div>
   </div>
   <hr/>
  </div>
 );
}

export default HotelDetail;