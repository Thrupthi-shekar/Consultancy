import React, { useState } from "react";
import axios from 'axios'

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api", {
        name,
        email,
        phone,
        message,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section id="contact-us" className="content">
      <h1>Contact Form</h1>
      <form onSubmit={collectData}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

// export default ContactUs;
