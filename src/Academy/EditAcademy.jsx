import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../helper/Axios'

const EditAcademy = () => {
  const [state, setState] = useState({
    academyName: "",
    description: "",
    email: "",
    contact: ""
  })
  const { id } = useParams()
  const navigate = useNavigate()

  const { academyName, description, email, contact } = state
  const token = window.localStorage.getItem("token")

  const handleChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { academyName, description, email, contact }
      const { data } = await axiosInstance.post(`/academies/saveacademy?managerId=${id}`, payload ,{headers:{Authorization:`Bearer ${token} `}})
      console.log(data);
      navigate("/adminDashBoard/academyDetails")
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
            <label htmlFor="academyName">Academy Name</label>
            <input type="text" id='academyName' name='academyName' value={academyName} onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name='description' value={description} onChange={handleChange} />
            <label htmlFor="email">email</label>
            <input type="text" id='email' name='email' value={email} onChange={handleChange} />
            <label htmlFor="contact">Contact</label>
            <input type="text" id='contact' name='contact' value={contact} onChange={handleChange} minLength="10" maxLength="10" />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default EditAcademy