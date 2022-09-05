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

 const url = BASE_URL + "/" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);

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
   <h2>{id}</h2>

  </div>
 );
}

export default HotelDetail;