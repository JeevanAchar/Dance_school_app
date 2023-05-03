import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditAcademicManager = () => {
  const nagivate = useNavigate()
  const [state, setState] = useState({
    userName: "",
    password: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    role: "",
    age: ""
  })
  const { id } = useParams()
  const { userName, password, email, phone, dob, gender, role, age } = state;

  const handleChange = (e)=>{
    e.preventDefault()
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <>
      <section>
        <article>
          <div>
            <label htmlFor="userName">username:</label>
            <input type="text" id='userName' name='userName' />
            <label htmlFor="password">password:</label>
            <input type="text" id='password' name='password' />
          </div>
          <div>
            <label htmlFor="email">email:</label>
            <input type="text" id='email' name='email' />
            <label htmlFor="phone">phone:</label>
            <input type="text" id='phone' name='phone' minLength="10" maxLength="10" />
          </div>
        </article>
      </section>
    </>
  )
}

export default EditAcademicManager