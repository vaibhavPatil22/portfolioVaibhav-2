import React, { useContext, useState } from "react";
import "./Contact.css";
// import { Link } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {


  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [information, setInformation] = useState("");
  
  const handleReservation = async (e)=>{
    e.preventDefault();
  try {
    const{data} = await axios.post(
      "http://localhost:4000/api/v1/reservation/send",
      {firstName, email, information},
      {
        headers:{
          'Content-Type':'application/json',
        },
        withCredentials: true,
      }
    );
    toast.success(data.success);
    setFirstName("");
    setEmail("");
    setInformation("");
    
  } catch (error) {
    toast.error(error);
  }
  
  };
  







  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();
  // const [done, setDone] = useState(false)
  // const sendEmail = (e) => {
  //   e.preventDefault();
  
  //   const formData = new FormData(form.current);
  //   const data = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });
  
  //   emailjs
  //     .sendForm("service_2mu5xtl", "template_m5udu2c", form.current, "VLwg1ltOWvnCYAiK_")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form>
          <input type="text"  className="user"  placeholder="Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          <input type="email"  className="user" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <textarea  className="user" rows="4" placeholder="Your Message..." value={information} onChange={(e)=> setInformation(e.target.value)}/>
          {/* <input type="submit" className="button" onClick={handleReservation}/> */}
          <button type="submit" className="button" onClick={handleReservation}>submit</button>
          {/* <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;





























// import React, { useContext, useRef, useState, useEffect } from "react";
// import "./Contact.css";
// import emailjs from "@emailjs/browser";
// import { themeContext } from "../../Context";

// const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [formSubmissions, setFormSubmissions] = useState([]);

//   useEffect(() => {
//     // Fetch form submissions when the component mounts
//     fetchFormSubmissions();
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     emailjs
//       .sendForm("service_2mu5xtl", "template_m5udu2c", form.current, "VLwg1ltOWvnCYAiK_")
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//           form.current.reset();

//           // Fetch form submissions after sending email
//           fetchFormSubmissions();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const fetchFormSubmissions = () => {
//     // Fetch form submissions from your backend
//     fetch('http://localhost:3001/get-form-submissions') // Replace with your backend URL
//       .then(response => response.json())
//       .then(data => setFormSubmissions(data))
//       .catch(error => console.error('Error fetching form submissions:', error));
//   };

//   return (
//     <div className="contact-form" id="contact">
//       {/* left side copy and paste from work section */}
//       <div className="w-left">
//         <div className="awesome">
//           {/* darkMode */}
//           <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
//           <span>Contact me</span>
//           <div
//             className="blur s-blur1"
//             style={{ background: "#ABF1FF94" }}
//           ></div>
//         </div>
//       </div>
//       {/* right side form */}
//       <div className="c-right">
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name="user_name" className="user"  placeholder="Name"/>
//           <input type="email" name="user_email" className="user" placeholder="Email"/>
//           <textarea name="message" className="user" placeholder="Message"/>
//           <input type="submit" value="Send" className="button"/>
//           {done && <span className="success-message">Form submitted successfully!</span>}
//           <div
//             className="blur c-blur1"
//             style={{ background: "var(--purple)" }}
//           ></div>
//         </form>

//         {/* Display form submissions */}
//         <div className="form-submissions">
//           {/* <h2>Form Submissions</h2> */}
//           <ul>
//             {formSubmissions.map((submission, index) => (
//               <li key={index}>
//                 <strong>Name:</strong> {submission.user_name}, 
//                 <strong>Email:</strong> {submission.user_email}, 
//                 <strong>Message:</strong> {submission.message}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;







// import React, { useContext, useRef, useState, useEffect } from "react";
// import "./Contact.css";
// import { themeContext } from "../../Context";

// const Contact = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [formSubmissions, setFormSubmissions] = useState([]);
//   const [allFieldsFilled, setAllFieldsFilled] = useState(false);

//   useEffect(() => {
//     fetchFormSubmissions();
//   }, []);

//   useEffect(() => {
//     const isFormFilled = Object.values(form.current.elements).every(element => element.value.trim() !== '');
//     setAllFieldsFilled(isFormFilled);
//   }, [done]);

//   const sendFormToBackend = async (formData) => {
//     try {
//       const response = await fetch('http://localhost:3001/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const responseData = await response.json();
//       console.log(responseData.message);
//       setDone(true);
//       form.current.reset();
//       fetchFormSubmissions();
//     } catch (error) {
//       console.error('Error sending form data:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);
//     const data = {};
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     sendFormToBackend(data);
//   };

//   const fetchFormSubmissions = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/get-form-submissions');
//       const data = await response.json();
//       setFormSubmissions(data);
//     } catch (error) {
//       console.error('Error fetching form submissions:', error);
//     }
//   };

//   return (
//     <div className="contact-form" id="contact">
//       <div className="w-left">
//         <div className="awesome">
//           <span style={{color: darkMode ? 'white' : ''}}>Get in Touch</span>
//           <span>Contact me</span>
//           <div
//             className="blur s-blur1"
//             style={{ background: "#ABF1FF94" }}
//           ></div>
//         </div>
//       </div>
//       <div className="c-right">
//         <form ref={form} onSubmit={handleSubmit}>
//           <input type="text" name="user_name" className="user" placeholder="Name"/>
//           <input type="email" name="user_email" className="user" placeholder="Email"/>
//           <textarea name="message" className="user" placeholder="Message"/>
//           <input type="submit" value="Send" className="button"/>
//           {done && allFieldsFilled && <span className="success-message">Form submitted successfully!</span>}
//           <div
//             className="blur c-blur1"
//             style={{ background: "var(--purple)" }}
//           ></div>
//         </form>

//         <div className="form-submissions">
//           {/* <h2>Form Submissions</h2> */}
//           <ul>
//             {formSubmissions.map((submission, index) => (
//               <li key={index}>
//                 <strong>Name:</strong> {submission.user_name}, 
//                 <strong>Email:</strong> {submission.user_email}, 
//                 <strong>Message:</strong> {submission.message}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

