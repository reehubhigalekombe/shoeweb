import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/auth.css"

function Auth() {
    const[isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false)
    const[formData, setFormData] =useState({
        username: "",
        email: "", 
        password: ""
    })
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate()

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!validateEmail(formData.email)) {
            setEmailError("Dear Client Kindly enter a valid email address.");
            return;
        } else {
            setEmailError("")
        }
        setLoading(true)
        try {
            const endPoint = isLogin
            ? "https://mkcolectionsb-1.onrender.com/login"
            : "https://mkcolectionsb-1.onrender.com/signup";

            const payload = isLogin
            ? { email: formData.email, password: formData.password }
            : formData
            const response = await axios.post(endPoint, payload );
            setMessage(response.data.message);

            if(response.data.token) {
                localStorage.setItem("token", response.data.token);
                navigate("/home")

            } 
        } catch(error) {
            console.error("Login/Signup error:", error);
            setMessage(error.response?.data?.message || "Something must have gone Wrong!!")
        } finally {
            setLoading(false)
        }
    }
  
  return (
    <div className='auths'>
        <video autoPlay loop muted playsInline className='video-back'>
            <source src="https://mkcolectionsb-1.onrender.com/uploads/kkk.mp4" type="video/mp4" />
            Your browser does not support the video tag
        </video>
        
        <div className='welcome'>
        <div className='left-hand'>
       <h1 className='hwr'> Welcome to MK Collections</h1>
       <p>Simple and Timeless Shoes to Wear!! 😊🙌👠</p>
       </div>

       <div className='right-hand'>
       <div className='authentication-form'>
      <h2>{isLogin ? "Login" : "Sign Up"}  </h2>
      {message && <p className='message'>{message}</p>}
      <form onSubmit={handleSubmit} className='auth-form'>
   {!isLogin && (
         <input type='text'
     name='username'
     onChange={handleChange} 
     placeholder='username'
     required
     className='input'/>
   )}

    <input type='email'
    name='email'
    onChange={handleChange} 
    placeholder='Email'
    required
    className='input'/>
    {emailError && <p className='error-message'>{emailError}</p>}

<input type='password'
    name='password'
    onChange={handleChange} 
    placeholder='Password'
    required
    className='input'/>

    <button type='submit' className='sub-button' disabled={loading}>
        {loading ? "Loading..." :  isLogin ?  "Login": "Sign Up"}
        </button>

      </form>
      <p onClick={() => setIsLogin(!isLogin)} className='toggle'>
            {isLogin ? " Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
       </div>
       
        </div>
    </div>
  )
}

export default Auth