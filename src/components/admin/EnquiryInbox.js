import { useState, useEffect } from "react";
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
        <h3>Name</h3>
        <p>{book.attributes.name}</p>
        <h3>Phonenumber</h3>
        <p>{book.attributes.number}</p>
        <h3>Email</h3>
        <p>{book.attributes.email}</p>
        <h4>Arrival</h4>
        <p>{book.attributes.arrival}</p>
        <h4>Departure</h4>
        <p>{book.attributes.departure}</p>
        <h4>Information</h4>
        <p>{book.attributes.information}</p>
        </div>;
   })}
  </>
 );
}

export default EnquiryList;