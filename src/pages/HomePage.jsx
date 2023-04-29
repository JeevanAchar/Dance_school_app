import React from 'react'
import STYLE from './pages.module.css'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

const navigate = useNavigate()
let removeStorage=()=>{
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("role")
    window.localStorage.removeItem("token")
    navigate('/login')
}
// const handleAdminData = ()=>{

// }
  return (
    <section id={STYLE.HomePageBlock}>
      <article id={STYLE.HomePageBlockArticle}>
        <nav>
            <ul className={STYLE.list}>
                <li>HOME</li>
                <li><Link  to="/logout">PAGES</Link></li>
                <li>EVENTS</li>
                <li><Link  to="/adminDashBoard">ADMIN DASHBORD</Link></li>
                <li onClick={removeStorage}>LOGOUT</li>
            </ul>
        </nav>
      </article>
    </section>
  )
}

export default HomePage