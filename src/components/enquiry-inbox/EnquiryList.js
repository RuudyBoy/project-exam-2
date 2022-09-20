import { useState, useEffect } from "react";
import { FaAsterisk, FaAt, FaPhone, FaRegCalendarAlt, FaRegEnvelope, FaUserCircle, FaWalking } from "react-icons/fa";
import { BASE_URL } from "../../constants/api";




const url = BASE_URL + "enquiries"
function EnquiryList() {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch(url);

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setBooks(json.data);
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
   {books.map(function (book) {
    return <div className="messages" key={book.id}>
      
        <p className="message-name">< FaUserCircle/> {book.attributes.name}</p>
       
        <p className="message-name"> <FaPhone/> {book.attributes.number}</p>
      
        <p className="text"> <FaAt/> {book.attributes.email}</p>
      
        <p className="text"><FaRegCalendarAlt/> Arrival: {book.attributes.arrival}</p>
       
        <p className="text"><FaRegCalendarAlt/> Departure: {book.attributes.departure}</p>
       
        <p className="text">< FaRegEnvelope/> {book.attributes.information}</p>
        </div>;
   })}
  </>
 );
}

export default EnquiryList;