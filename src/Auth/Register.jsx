import React, { useState } from 'react'
import axiosInstance from '../helper/Axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [state, setState] = useState({
        userName: "",
        password: "",
        dob: "",
        email: "",
        gender: "",
        phone: ""
    })
    let { userName, password, dob, email, gender, phone } = state;
    let navigate = useNavigate()

    const handleChange =(e)=>{
        e.preventDefault()
        let {name, value} = e.target
        setState({...state, [name]: value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            let payload = {userName, password, dob, email, gender, phone }
            let axiosResult =  await axiosInstance.post('/users/save', payload)
            console.log(axiosResult)
            console.log("data successfully sent")
            navigate("/")
        }catch{

        }finally{
            console.log("just finally thing that's it ")
        }

        console.log({ userName, password, dob, email, gender, phone })
    }

    const handleCancle = ()=>{
        setState({state:""})
    }

    return (
        <>
            <section>
                <article>
                    <form action="">
                        <div>
                            <label htmlFor="userName">name:</label>
                            <input type="text" name='userName' id='userName' placeholder='name *' value={userName} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="password">password:</label>
                            <input type="password" name='password' id='password' placeholder='password *' value={password} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">email:</label>
                            <input type="email" name='email' id='email' placeholder='email *' value={email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input type="text" name='phone' id='phone' placeholder='number *' minLength="10" maxLength="10"  value={phone} onChange={handleChange}/>
                        </div>
                        <div>
                            <span>
                                <input type="radio" name='gender' id='male' value="male" onChange={handleChange} />
                                <label htmlFor="male">male:</label>
                            </span>
                            <span>
                                <input type="radio" name='gender' id='female' value="female" onChange={handleChange} />
                                <label htmlFor="female">female:</label>
                            </span>
                        </div>
                        <div>
                            <label htmlFor="dob">dob</label>
                            <input type="date" name='dob' id='dob' value={dob} onChange={handleChange} />
                        </div>
                        <div>
                                <input type="checkbox" name="checkbox" id="accept" />
                                <label htmlFor="accept">I agree to terms and condition</label>
                        </div>
                        <button onClick={handleSubmit}>signUp</button>
                        <button onClick={handleCancle}>cancel</button>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Register;