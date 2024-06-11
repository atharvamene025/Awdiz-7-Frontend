// import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);

  function handleChange(event) {
    console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.value]: [event.target.name] });
  }
  //   console.log(userData.name, userData.value);
async function handleSubmit(e){
  e.preventDefault();

  try {
    if(userData.name && userData.password){
      const response = {
        data: { success: true, message: "Registration Succesfull" },
      };
      if(response.data.success){
        toast.success(response.data.message)
        setUserData({
          name: "",
          password: "",
        });

      }else{
        toast.error("All Fields Are Mandatory");

      }
    }
    
  } catch (error) {
    console.log(error)
    
  }
}
  useEffect(()=>{
    const errorsArray = [];
    if(!userData.name){
      errorsArray.push("Name is Required.");
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
      <form onChange={handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="">Name :</label>
        <br />
        <input onChange={handleChange} type="text" name="name" />
        <br />
        <label htmlFor="">Password :</label>
        <br />
        <input onChange={handleChange} type="password" name="password" />
        <br />

        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i}>{error}*</p>
            ))}
          </div>
        )}
        <input  type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
