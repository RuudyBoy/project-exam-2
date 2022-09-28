import { useState, useEffect } from "react";
import {  FaAt, FaRegEnvelopeOpen, FaUserCircle } from "react-icons/fa";
import { BASE_URL } from "../../constants/api";

const url = BASE_URL + "messages"

function MessageList() {
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(function () {
  async function fetchMessages() {
   try {
    const response = await fetch(url);

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
  fetchMessages();
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
    return <div className="message-card" key={message.id}>
        <p className="message-name"> < FaUserCircle/> {message.attributes.name}</p> <hr></hr>
        <p className="message-subject"><FaAt/> {message.attributes.email}</p>
        <p className="message-text"> <FaRegEnvelopeOpen/>  {message.attributes.message}</p>
        </div>;
   })}
  </>
 );
}

export default MessageList;