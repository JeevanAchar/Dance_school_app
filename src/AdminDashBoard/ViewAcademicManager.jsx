import React from 'react'
import axiosInstance from '../helper/Axios';


const ViewAcademicManager = () => {

  const handleClick = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    try {
      let { data } = await axiosInstance.get("/academymanagers/getall",{headers:{Authorization:`Bearer ${token} `}})
      console.log(data);

    } catch {
      console.log("unable to get the data")
    }

  }


  return (
    <>
      <button onClick={handleClick}>to get data</button>
    </>
  )
}

export default ViewAcademicManager