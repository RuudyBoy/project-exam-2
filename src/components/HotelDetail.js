import { useState, useEffect } from "react";
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
   <h2>{hotel.attributes}</h2>
   <p>{id}</p>
   <p>In maximus erat ac sollicitudin volutpat. Phasellus libero neque, bibendum sit amet metus vel, gravida dictum elit. Nullam magna libero, efficitur pretium nulla at, feugiat cursus mi. Ut non nulla ipsum. Nam eu sapien auctor arcu iaculis blandit. Ut enim risus, maximus ut elit ut, egestas consequat tortor. Sed eu dolor vel dui imperdiet porta tempor nec nisi.</p>
   <a className="cta-login" href="/enquiry"> here</a>

  </div>
 );
}

export default HotelDetail;