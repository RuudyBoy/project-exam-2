import { useState, useEffect } from "react";

function BookList() {
 const [books, setBooks] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch("https://ruud-exam.herokuapp.com/api/messages");

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
        <h3>Subject</h3>
        <p>{book.attributes.subject}</p>
        <h3>Message</h3>
        <p>{book.attributes.message}</p>
        </div>;
   })}
  </>
 );
}

export default BookList;