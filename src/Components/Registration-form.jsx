import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import './Form.css'

export default function Form() {
  // Destructuring useForm()
  const { register,watch, handleSubmit, formState: { errors }} = useForm();

  // Using useState hook for store the data and state of the form
  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);

  // created a arrow function to handle data and route to main page
  const onSubmit = (data)=>{
    setField(data)
    setSubmit(true)
  }

  console.log(errors.email)

  return (
    <>
      {/*Declaring navbar of the website which contains title and logo*/}
      <div id="Navbar">
        <div id="logo-div">
          <Link to="/"><img src={Logo} alt="" id="Logo"/></Link>
          <h2>Kalvium Books</h2>
        </div>
      </div>

      {/*Declaring body for the website which contains regiatration form*/}
      <div id="body">
        {/* Declaring the div which conatins the registration form */}
        <div className="form-container">

          {/* Registration form with name,email,password,confirmpassword and checkbox for terms and conditions */}
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

            {/* To print success message when form is registred successfully */}
            {submitted?<div className="success-message">Registration succesfull!</div>:null}

            {/* Input for the name and span to show the errors */}
            <input
            id="name"
            className="form-field"
            type="text"
            placeholder="name"
            {...register('name',{required:"Name is required!",maxLength:{value:30, message:"Name cannot be more than 20 characters"}})}/>
            <span>{errors.name?.message}</span>

            {/* Input for the email and span to show the errors */}
            <input
            id="email"
            className="form-field"
            type="email"
            placeholder="Email"
            {...register('email',{required:"email is required!", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}/>
            <span>{errors.email?.message}</span>

            {/* Input for the password and span to show the errors */}
            <input
            id="Password"
            className="form-field"
            type="password"
            placeholder="Password"
            {...register('password',{required:"Password is required!", 
            minLength:{value:4,message:"Password must be more than 4 characters"},
            maxLength:{value:20, message:"Password cannot be more than 20 characters"}})}/>
            <span>{errors.password?.message}</span>

            {/* Input for the Confirm password and span to show the errors */}
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
            },})}/>
            <span>{errors.confirm_password?.message}</span>

            {/* Checkbox for the terms and conditions */}
            <div id="termsAndCondition">
              <input type="checkbox"  name="Terms and Condtions" id=""{...register("termsAndCondition", {required:"Accept terms and condition"})} /> 
              <label>Accept terms and Conditions</label>
            </div>
            <span>{errors.termsAndCondition?.message}</span>

            {/* Button for the registration */}
            <Link to='/books'><button id="Reg" className="form-field" type="submit">
              Register
            </button></Link>
          </form>
        </div>
      </div>
    </>
  );
}