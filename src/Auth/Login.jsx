import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import STYLE from './Auth.module.css'
import axiosInstance from '../helper/Axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [state, setState] = useState({
        userEmail: "",
        password: ""
    })
    const { userEmail, password } = state
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log({ userEmail, password })
        try {
            const payload = { userEmail, password }
            const {data} = await axiosInstance.post('/authenticate', payload)
            let { role, token, userId } = data

            if(token){
                toast.success(`successfully ${userEmail} logged in`,{position: toast.POSITION.TOP_RIGHT})
            }
        
            let jsonData = async () => {
                console.log(role, token, userId)
                if (token) {
                    window.localStorage.setItem("userId", userId)
                    window.localStorage.setItem("role", role)
                    window.localStorage.setItem("token", token)
                } else {
                    window.localStorage.removeItem("userId", userId)
                    window.localStorage.removeItem("role", role)
                    window.localStorage.removeItem("token", token)
                }
                navigate("/")
                return { role, token, userId }
            }
            jsonData()
        } catch {
            console.log("unable to connect to the server")
        }
    }
    return (
        <>
            <section id={STYLE.blockOne}>
                <ToastContainer/>
                <article id={STYLE.blockOneArticle}>
                    <form action="">
                        <h4>Login</h4>
                        <div id={STYLE.blockOneDivOne}>
                            <input type="text" name='userEmail' placeholder=' Email address' value={userEmail} onChange={handleChange} />
                            <input type="password" name='password' placeholder=' Password' value={password} onChange={handleChange} />
                        </div>
                        <div id={STYLE.blockOneDivTwo}>
                            <div>
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember"> Remember me</label>
                            </div>
                            <div>
                                <Link to="userRegister">Forgot password?</Link>
                            </div>
                        </div>
                        <div id={STYLE.blockOneDivThree}>
                            <button onClick={handleSubmit}>SIGN IN</button>
                        </div>
                        <div id={STYLE.blockOneDivFour}>
                            <p>Not a member?</p>
                            <Link to="userRegister">Register</Link>
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}
export default Login