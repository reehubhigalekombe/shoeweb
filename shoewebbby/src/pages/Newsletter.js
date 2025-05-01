import React, {useState} from 'react';
import "../styles/newsletter.css";

function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mkcolectionsb-1.onrender.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.ok) {
        alert("Subscribed Successfully!");
      }
    } catch(error) {
      console.error(error);
      alert("Error while Submitting the form")
    }

    const mailtoLink=`mailto:elonreaganp@gmail.com?subject=New 
    Subscriber&body=Firts Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail:
     ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInterests: ${formData.interests}`;
    window.location.href = mailtoLink;
  }
  return (
    <div  className='newsletter'>
      <div className='top'>
      <h1>MK COLLECTIONS</h1>
      <h2>All your brand needs in Shoes Covered</h2>
      <p>Kindly enter your information below for updates, promotion and Verified Market Reports</p>
      
      </div>
      <div className='bottom'>
        <div className='partionCenter'>
        <form onSubmit={handleSubmit}>

          <label htmlFor='name'><span style={styles.required}>*</span>First Name:</label><br/>

          <input type='text'  
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name' 
          required/>

          <label htmlFor='name'><span style={styles.required}>*</span>Last Name:</label><br/>

          <input type='text'  
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Last Name' 
          required/>

        <label htmlFor='email'><span style={styles.required}>*</span>Email:</label><br/>

        <input type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter email address' 
        required/>
     
        <label htmlFor='number'>    <span style={styles.required}>*</span>Phone No.: </label><br/>

        <input type='tel' 
         name='phone'
         value={formData.phone}
         onChange={handleChange}
          placeholder='+254 794 517132'
         required />
            <label htmlFor='number'>    <span style={styles.required}>*</span>What types of Shoes You are in Interest in?(Optional) </label><br/>
         <textarea  
         name='interests'
         value={formData.interests} 
         onChange={handleChange}
         id='interests' 
         rows="3"
         cols="50"
         placeholder="e.g, men, Kids, Sports< Women, Sneakers">
          Interests
          </textarea>

        <button type='submit' className='buttonn'>Subcribe</button>
      </form>
        </div>

      </div>
    </div>
  )
}
const styles = {
  required: {
    color: "red"
  }
}

export default Newsletter

    
