import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'

const EditCourse = () => {
  const [state, setState] = useState({
    courseDurationInMonths:"",
    fee:"",
    type:""
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const {courseDurationInMonths, fee, type} = state
  const token = window.localStorage.getItem("token")

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { courseDurationInMonths, fee, type}
      const { data } = await axiosInstance.post(`/dancecourses/save?branchid=${id}`, payload ,{headers:{Authorization:`Bearer ${token} `}})
      const finalData = data.data
      setState(finalData)
    //   console.log(data);
      // navigate("/adminDashBoard/branchDetails")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <section>
        <article>
          <form action="">
            <label htmlFor="courseDurationInMonths">courseDurationInMonths</label>
            <input type="text" id='courseDurationInMonths' name='courseDurationInMonths' value={courseDurationInMonths} onChange={handleChange} />

            <label htmlFor="fee">fee</label>
            <input type="text" id="fee" name='fee' value={fee} onChange={handleChange} minLength="6" maxLength="6" />

            <label htmlFor="type">type</label>
            <input type="text" id='type' name='type' value={type} onChange={handleChange} minLength="10" maxLength="10"/>
            
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default EditCourse