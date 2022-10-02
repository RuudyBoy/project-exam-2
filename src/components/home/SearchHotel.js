import React from 'react'
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';

const url =  BASE_URL + "hotels?populate=*";

function SearchHotel() {
    const [filter, setFilter] = useState("")
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(function () {
     async function fetchData() {
      try {
       const response = await fetch(url);
   
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
     return <div>ERROR: An error occured</div>;
    }
   
    return (
     <>
     <div>
        <input className="searchbar" placeholder="Search for hotel here..." type={"search"} onChange={event => setFilter(event.target.value)} />
    </div>
     {hotels.filter(hotel => {
        if (filter === "") {
            return null;
        } else if (hotel.attributes.hotel.toLowerCase().includes(filter.toLowerCase())) {
            return hotel;
        }
    }).map((hotel) => (
    <div className="dropdown" key={hotel.id}>
        <Link to={`detail/${hotel.id}`}>
            <div className="dropdown-design"> 
            <img className="dropdown-img" src={hotel.attributes.image.data.attributes.url} alt="Logo" />
            <p>{hotel.attributes.hotel}</p>
            </div>
        </Link>
    </div>
  ))}
     </>
    );
   }
   
   export default SearchHotel; 