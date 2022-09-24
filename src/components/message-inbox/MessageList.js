import { useState, useEffect } from "react";
import {  FaAt, FaRegEnvelopeOpen, FaUserCircle } from "react-icons/fa";

function MessageList() {
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(function () {
  async function fetchData() {
   try {
    const response = await fetch("https://ruud-exam.herokuapp.com/api/messages");

    if (response.ok) {
     const json = await response.json();
     console.log(json);
     setMessages(json.data);
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
   {messages.map(function (message) {
    return <div className="messages" key={message.id}>
        <p className="message-name"> < FaUserCircle/> {message.attributes.name}</p> <hr></hr>
        <p className="message-subject"><FaAt/> {message.attributes.email}</p>
        <p className="text"> <FaRegEnvelopeOpen/>  {message.attributes.message}</p>
       
        </div>;
   })}
  </>
 );
}

export default MessageList;