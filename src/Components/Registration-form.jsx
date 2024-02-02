import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import './Form.css'

export default function Form() {
  const { register,watch, handleSubmit, formState: { errors }} = useForm();
  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);
  const onSubmit = (data)=>{
    setField(data)
    setSubmit(true)
    setTimeout(() => {
        window.location.href = "/";
      }, 100);
    
  }

  console.log(errors.email)

  return (
    <>
    <div id="Navbar">
        <div id="logo-div">
          <Link to="/"><img src={Logo} alt="" id="Logo"/></Link>
          <h2>Kalvium Books</h2>
        </div>

        </div>
        <div id="body">
          <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

      {submitted?<div className="success-message">Registration succesfull!</div>:null}

        <input
          id="name"
          className="form-field"
          type="text"
          placeholder="name"
          {...register('name',{required:"Name is required!",maxLength:{value:30, message:"Name cannot be more than 20 characters"}})}
          
          
        />

        <span>{errors.name?.message}</span>


        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          {...register('email',{required:"email is required!", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}
         
        />

        <span>{errors.email?.message}</span>

        <input
          id="Password"
          className="form-field"
          type="password"
          placeholder="Password"
          {...register('password',{required:"Password is required!", 
          minLength:{value:4,message:"Password must be more than 4 characters"},
          maxLength:{value:20, message:"Password cannot be more than 20 characters"}})}
          
        />
        <span>{errors.password?.message}</span>
        <input
          id="CPassword"
          className="form-field"
          type="password"
          placeholder="Retype your Password"
          {...register("confirm_password", {required:"Confirm Password is required!", 
            validate: (val) => {
              if (watch('password') != val) {
                return "Your passwords do no match";
              }
            },
           })}

          
        />
        <span>{errors.confirm_password?.message}</span>
       <div id="termsAndCondition"><input type="checkbox"  name="Terms and Condtions" id=""{...register("termsAndCondition", {required:"Accept terms and condition"})} /> <label>Accept terms and Conditions</label></div>
       <span>{errors.termsAndCondition?.message}</span>
        <button id="Reg" className="form-field" type="submit">
          Register
        </button>
      </form>
          </div>
        </div>
    </>
  );
}