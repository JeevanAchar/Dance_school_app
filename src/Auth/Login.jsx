import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import STYLE from './Login.module.css'
import axiosInstance from '../helper/Axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [state, setState] = useState({
        userEmail:"",
        password:""
    })
    const {userEmail, password} = state
    const navigate = useNavigate()

    const handleChange =(e)=>{
        e.preventDefault()
        let {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({userEmail,password})
        try{
            const payload = {userEmail, password}
            const axiosReturn = axiosInstance.post('/authenticate', payload)
            console.log(axiosReturn)
            console.log("authenthhicated")
            navigate('/homePage')
        }catch{
            console.log("unable to connect to the server")
        }
    }
    return (
        <>
            <section id={STYLE.blockOne}>
                <article id={STYLE.blockOneArticle}>
                    <form action="">
                        <h3>Log in</h3>
                        <div>
                            <label htmlFor="userEmail">email:</label>
                            <input type="email" id="userEmail" placeholder='email *' name='userEmail' value={userEmail} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">password:</label>
                            <input type="password" name="password" id="password" placeholder="password *"  value={password} onChange={handleChange}/>
                        </div>
                        <section>
                            <input type="checkbox" name='remember_me' id="remember_me"/>
                            <label htmlFor="remember_me"> Remember me</label>
                        </section>
                        <div onClick={handleSubmit}>
                            <button>Sign In</button>
                        </div>
                        <div>
                            <Link to="/userRegister"> <span>Forgot password?</span><span>Don't have an account?</span><span>Sign Up</span></Link>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Login