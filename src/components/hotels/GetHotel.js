import { useState, useEffect } from "react";
import HotelItem from "./HotelItem";
import logo from "../../images/holidazeform128.png"
import { mockHotels } from "../../constants/mockHotels";

function GetHotel() {
 const [hotels, setHotels] = useState([]);
 const [loading, setLoading] = useState(true);
 const [sortType, setSortType] = useState('default');

 useEffect(function () {
  // Simulate network request for loading state feeling
  const timer = setTimeout(() => {
   setHotels(mockHotels);
   setLoading(false);
  }, 500);
  return () => clearTimeout(timer);
 }, []);

 if (loading) {
  return <div className="loading-text">
   <img className="logo" src={logo} alt="Logo" />
   <h2>Finding Hotels...</h2>
   </div>;
 }

 const sortedHotels = [...hotels].sort((a, b) => {
     if (sortType === 'price-low-high') {
         return a.attributes.price - b.attributes.price;
     } else if (sortType === 'price-high-low') {
         return b.attributes.price - a.attributes.price;
     } else if (sortType === 'rating-high-low') {
         return b.attributes.rating - a.attributes.rating;
     } else if (sortType === 'rating-low-high') {
         return a.attributes.rating - b.attributes.rating;
     }
     return 0; // default
 });

 return ( 
    <div className="hotel-page-body">
     <div className="hotel-filter-bar">
       <div className="filter-inner">
           <label>Sort by: </label>
           <select 
              value={sortType} 
              onChange={(e) => setSortType(e.target.value)}
           >
               <option value="default">Default</option>
               <option value="price-low-high">Price: Low to High</option>
               <option value="price-high-low">Price: High to Low</option>
               <option value="rating-high-low">Rating: High to Low</option>
               <option value="rating-low-high">Rating: Low to High</option>
           </select>
       </div>
     </div>
     <div className="hotel-container">
      {sortedHotels.map(function (hotel) {
       const {id, attributes} = hotel;
       const defaultImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
       // Safe check for image
       const imageUrl = attributes?.image?.data?.attributes?.url || defaultImage;
       
       return <HotelItem key={id} id={id} image={imageUrl} price={attributes.price} rating={attributes.rating} text={attributes.text} title={attributes.hotel} />;
      })}
     </div>
    </div>
   );
}

export default GetHotel;