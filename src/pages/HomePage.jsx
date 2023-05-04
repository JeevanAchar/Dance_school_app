import React from 'react'
import STYLE from './pages.module.css'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const role = window.localStorage.getItem("role")
  const removeStorage = () => {
    window.localStorage.clear()
    navigate('/login')
  }
  return (
    <section id={STYLE.HomePageBlock}>
      <article id={STYLE.HomePageBlockArticle}>
        <nav>
          <ul className={STYLE.list}>
            <li>HOME</li>
            <li><Link to="/logout">PAGES</Link></li>
            <li>EVENTS</li>
            <li><Link to="/adminDashBoard">{role === "ROLE_ADMIN" ? "ADMIN DASHBORD" : null}</Link></li>
            <li onClick={removeStorage}>LOGOUT</li>
          </ul>
        </nav>
      </article>
    </section>
  )
}

export default HomePage