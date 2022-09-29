import React from 'react'
import { useState, useEffect } from "react";
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
        <input className="searchbar" placeholder="Enter hotel here..." type={"search"} onChange={event => setFilter(event.target.value)} />
    </div>
     {hotels.filter(hotel => {
        if (filter === "") {
            return null;
        } else if (hotel.attributes.hotel.toLowerCase().startsWith(filter.toLowerCase())) {
            return hotel;
        }
    }).map((hotel) => (
    <div className="dropdown" key={hotel.id}>
      <p>{hotel.attributes.hotel}</p>
    </div>
  ))}
     </>
    );
   }
   
   export default SearchHotel; 
   
   /*{books.map(function (book) {
       return <div key={book.id}> <h2>{book.attributes.hotel}</h2></div>;
      })}

  <div>
      <input placeholder="Enter hotel Title" onChange={event => setQuery(event.target.value)} />
    {
      books.map((hotel, index) => {
        <div key={index}>
          <p>{hotel.attributes.hotel}</p>
        </div>
      })
    }
    </div>*/