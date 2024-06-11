// import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors,setErrors]= useState([]);
  const [disable,setDisable]=useState(true);
  const router = useNavigate();
  console.log(userData, "userData");

  function handleChange(event) {
    // console.log(event.target.value, event.target.name);

    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // console.log("hii")
    try {
      if (userData.name && userData.email && userData.password) {
        // const response = await axios.post(
        //   "https://awdiz-7/api/v1/user/register")
        const response = {
          data: { success: true, message: "Registration Succesfull" },
        };
        if (response.data.success) {
          toast.success(response.data.message);
          setUserData({
            name: "",
            email: "",
            password: "",
          });

          router("/login");
        }
      } else {
        toast.error("All Fields Are Mandatory");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const errorsArray = [];
    if(!userData.name){
      errorsArray.push("Name is Required.");
    }
    if(!userData.email){
      errorsArray.push("Email is Required.");
    }
    if(!userData.password){
      errorsArray.push("Password is Required.");
    }

    setErrors(errorsArray);
    console.log( "errors.length");
    if(errorsArray.length === 0){
      setDisable(false);
    }else{
      setDisable(true);
    }
  },[userData])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <br />
        <label>Name :</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={userData.name}
        />
        <br />
        <label>Email :</label>
        <br />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={userData.email}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={userData.password}
        />
        <br />

        {errors.length>0 &&(
          <div>
            {errors.map((error,i)=>(
              <p key={i}>{error}*</p>
            ))}
          </div>
        )}
        <input disabled={disable} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
