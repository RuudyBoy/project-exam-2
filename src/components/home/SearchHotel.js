import React from 'react'
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { mockHotels } from '../../constants/mockHotels';

function SearchHotel() {
    const [filter, setFilter] = useState("")
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(function () {
     // Simulate network request for loading state feeling
     const timer = setTimeout(() => {
      setHotels(mockHotels);
      setLoading(false);
     }, 500);
     return () => clearTimeout(timer);
    }, []);
   
    if (loading) {
     return <div style={{color: '#fff', textAlign: 'center'}}>Loading...</div>;
    }
   
    return (
     <>
     <div>
        <input className="searchbar" placeholder="Search for luxury hotel..." type={"search"} onChange={event => setFilter(event.target.value)} />
    </div>
     {hotels.filter(hotel => {
        if (filter === "") {
            return null;
        } else if (hotel.attributes.hotel.toLowerCase().includes(filter.toLowerCase())) {
            return hotel;
        }
        return null;
    }).map((hotel) => {
        const defaultImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        const imageUrl = hotel.attributes?.image?.data?.attributes?.url || defaultImage;
        return (
            <div className="dropdown" key={hotel.id}>
                <Link to={`detail/${hotel.id}`}>
                    <div className="dropdown-design"> 
                    <img className="dropdown-img" src={imageUrl} alt={hotel.attributes.hotel} />
                    <p>{hotel.attributes.hotel}</p>
                    </div>
                </Link>
            </div>
        );
    })}
     </>
    );
   }
   
   export default SearchHotel; 