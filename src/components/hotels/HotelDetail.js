import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

import { mockHotels } from "../../constants/mockHotels";

function HotelDetail() {
 const [hotel, setHotel] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();
 const { id } = useParams();

 if (!id) {
  history.push("/");
 }

 useEffect(
  function () {
   // Simulate network request for loading state feeling
   const timer = setTimeout(() => {
    const foundHotel = mockHotels.find(h => h.id.toString() === id);
    if (foundHotel) {
        setHotel({ data: foundHotel });
    } else {
        setError("We have problems getting the hotel details.");
    }
    setLoading(false);
   }, 500);
   return () => clearTimeout(timer);
  },
  [id]
 );

 if (loading) {
  return <div style={{color: '#fff', textAlign: 'center', marginTop: '100px'}}>Fetching hoteldetails...</div>;
 }

 if (error || !hotel) {
  return <div style={{color: '#fff', textAlign: 'center', marginTop: '100px'}}>An error occured: {error}</div>;
 }
 
 const defaultImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
 const imageUrl = hotel.data.attributes?.image?.data?.attributes?.url || defaultImage;

 return (
  <div className="hotel-page-wrapper">   
   <div className="hoteldetails-container"> 
    
    <div className="detail-header">
       <h1>{hotel.data.attributes.hotel}</h1>
       <div className="detail-meta">
         <span className="hotel-review">★</span>
         <span className="review-text">{hotel.data.attributes.rating} (128 Reviews)</span>
         <span className="meta-divider">•</span>
         <span className="hotel-location">📍 Bergen, Norway</span>
       </div>
    </div>
    
    <div className="detail-gallery">
        <img className="gallery-main" alt={hotel.data.attributes.hotel} src={imageUrl} />
        <div className="gallery-side">
            <img alt="Room view 1" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
            <img alt="Room view 2" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />
        </div>
    </div>

    <div className="detail-layout">
     
     <div className="detail-main-content">
       <div className="host-info">
          <div className="host-text">
              <h2>Hosted by Holidaze Premium</h2>
              <p>Superhost • 7 years hosting</p>
          </div>
          <div className="host-avatar">HP</div>
       </div>

       <div className="detail-tabs">
           <span className="tab active">Overview</span>
           <span className="tab">Amenities</span>
           <span className="tab">Reviews</span>
           <span className="tab">Policies</span>
       </div>

       <div className="about-section">
           <h3>About this space</h3>
           <p className="hoteldetails-info">{hotel.data.attributes.text}</p>
       </div>

       <div className="features-grid">
           <div className="feature-item">
               <div className="feature-icon">🛏️</div>
               <p>Cosy bedrooms</p>
           </div>
           <div className="feature-item">
               <div className="feature-icon">🛁</div>
               <p>Private bathrooms</p>
           </div>
           <div className="feature-item">
               <div className="feature-icon">📏</div>
               <p>Spacious living area</p>
           </div>
           <div className="feature-item">
               <div className="feature-icon">📍</div>
               <p>Prime Location</p>
           </div>
       </div>
       
       <Link to="/hotels" className="back-link">← Back to hotels page</Link>
     </div>
     
     <div className="detail-sidebar">
       <div className="sticky-booking-card">
         <div className="booking-price">
             <span className="price">{hotel.data.attributes.price} kr</span>
             <span className="night">/ night</span>
         </div>
         
         <div className="booking-form">
             <div className="date-inputs">
                 <div className="input-group">
                     <label>Check-in</label>
                     <input type="text" placeholder="Add date" readOnly value="12/01/2023" />
                 </div>
                 <div className="input-group">
                     <label>Check-out</label>
                     <input type="text" placeholder="Add date" readOnly value="15/01/2023" />
                 </div>
             </div>
             <div className="guest-input">
                 <label>Guests</label>
                 <select>
                     <option>2 guests</option>
                     <option>3 guests</option>
                     <option>4 guests</option>
                 </select>
             </div>
         </div>
         
         <Link to={`/enquiry?hotel=${encodeURIComponent(hotel.data.attributes.hotel)}`} className="cta-button booking-btn">Continue to Enquiry</Link>
         
         <div className="price-breakdown">
             <div className="breakdown-row">
                 <span>{hotel.data.attributes.price} kr x 3 nights</span>
                 <span>{hotel.data.attributes.price * 3} kr</span>
             </div>
             <div className="breakdown-row">
                 <span>Service Fee</span>
                 <span>450 kr</span>
             </div>
             <hr />
             <div className="breakdown-row total">
                 <span>Total</span>
                 <span>{hotel.data.attributes.price * 3 + 450} kr</span>
             </div>
         </div>
       </div>
     </div>
     
    </div>
   </div>
  </div>
 );
}

export default HotelDetail;