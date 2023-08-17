import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  let user = {
   
    email: "",
    password: "",
  }
  const navigate=useNavigate();
  async function getUserInfo(obj) {
    try {
      let { data } = await axios.post('https://alrayademo-back.appssquare.com/api/admin/login', obj)
      console.log(data);
      if(data.message==="success"){
        $('.sucmsg').fadeIn(2000,function(){
        navigate('/home')
        })
      }
    }
    catch(err)
    {
      console.log(err.response.data.message);
      $('.errmsg').fadeIn(1000,function(){
        setTimeout(() => {
          $('.errmsg').fadeOut(500)
        }, 3000);
      })
    }
  }

  
  let formik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
         getUserInfo  (values);
    },
    validate: function (values) {
      let error = {};
     
      if (!values.email.includes('@') || !values.email.includes(".com")) {
        error.email = "Email must be valid"
      }
      
      if (values.password.length < 6 || values.password.length > 12) {
        error.password = "password must be more 6"
      }
      return error
    }

  })




  return <>
      <div className="container">
      <h2>Login Form</h2>
      <div style={{'display':'none'}} className=" errmsg alert alert-danger text-center">Email or Password Incorrect</div>
      <div style={{'display':'none'}} className=" sucmsg alert alert-danger text-center">congatrulations</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" placeholder='Email' className='form-control my-2  ' />
        {formik.errors.email && formik.touched.email ? <div className="alert alert-danger text-center">{formik.errors.email}</div> : ""}
        <label htmlFor="password">Password</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" placeholder='Password' className='form-control my-2  ' />
        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger text-center">{formik.errors.password}</div> : ""}
        <button type='submit'  className='btn btn-outline-info'>Login</button>

      </form>
    </div>

  
  
  
  
  
  
  
  
  
  
  </>
}