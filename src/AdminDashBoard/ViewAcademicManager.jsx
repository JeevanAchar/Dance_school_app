import React, { useState } from 'react'
import axiosInstance from '../helper/Axios';


const ViewAcademicManager = () => {
  let[state, setState] = useState({
    age:"",
    dob:"",
    email:"",
    id:"",
    phone:"",
    role:"",
    userName:""
  })

  const {age, dob, email, id, phone, role, userName} = state;
  console.log( age, dob, email, id, phone, role, userName );


  const handleClick = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    try {
      let { data } = await axiosInstance.get("/academymanagers/getall",{headers:{Authorization:`Bearer ${token} `}})
      const finalData = data.data
      const {age, dob, email, id, phone, role, userName} = finalData[0];
      // console.log({age, dob, email, id, phone, role, userName})
      setState({age:age,dob:dob, email:email, id:id, phone:phone,role:role,userName:userName})   
      // console.log(finalData) 
    } catch {
      console.log("unable to get the data")
    }

  }


  return (
    <>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{id}</p>
        <p>{dob}</p>   
        <p>{role}</p>
        <p>{age}</p>   
        <p></p>
      <button onClick={handleClick}>to get data</button>
    </>
  )
}

export default ViewAcademicManager