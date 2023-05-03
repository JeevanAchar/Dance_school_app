import React from 'react'
import { Link } from 'react-router-dom';
import STYLE from './admin.module.css'

const AdminSideBar = () => {
    return (
        <>
            <section id={STYLE.AdminSideBarBlock}>
                <article>
                    <h2>ADMIN DASHBOARD</h2>
                        <nav id={STYLE.AdminSideBarBlockNav}>
                            <ul id={STYLE.AdminSideBarBlockUl}>
                                <li><Link to="/adminDashBoard/academyManagerRegister">Add Academy Manager</Link></li>
                                <li><Link to="/adminDashBoard/viewAcademyManager">View Academy Manager</Link></li>
                                <li><Link to="/adminDashBoard/viewAcacdemyDashBoard"> View Academy</Link></li>
                                <li><Link to="/adminDashBoard/viewBranchDashBoard">View Branch</Link></li>
                                <li>View Course</li>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                </article>
            </section>
        </>
    )
}

export default AdminSideBar