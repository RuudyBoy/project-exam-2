import { useState, useEffect } from "react";
import { FaAt, FaRegCalendarAlt, FaRegEnvelope, FaUserCircle } from "react-icons/fa";
import { BASE_URL } from "../../constants/api";

const url = BASE_URL + "enquiries"

function EnquiryList() {
 const [enquiry, setEnquiry] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(function () {
  async function fetchEnquiries() {
   try {
    const response = await fetch(url);

    if (response.ok) {
     const json = await response.json();
     setEnquiry(json.data);
    } else {
     setError("An error occured");
    }
   } catch (error) {
    setError(error.toString());
   } finally {
    setLoading(false);
   }
  }
  fetchEnquiries();
 }, []);

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>ERROR: An error occured</div>;
 }

 return (
  <>
   {enquiry.map(function (enquiries) {
    return <div className="message-card" key={enquiries.id}>
        <p className="message-name">< FaUserCircle/> {enquiries.attributes.name}</p>
        <p className="message-text"> <FaAt/> {enquiries.attributes.email}</p>
        <p className="message-text"><FaRegCalendarAlt/> Arrival: {enquiries.attributes.arrival}</p>
        <p className="message-text"><FaRegCalendarAlt/> Departure: {enquiries.attributes.departure}</p>
        <p className="message-text">< FaRegEnvelope/> {enquiries.attributes.information}</p>
        </div>;
   })}
  </>
 );
}

export default EnquiryList;