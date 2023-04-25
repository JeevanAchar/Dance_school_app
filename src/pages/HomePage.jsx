import React from 'react'
import STYLE from './pages.module.css'


const HomePage = () => {
  return (
    <section id={STYLE.HomePageBlock}>
      <article>
        <nav>
            <ul>
                <li>Home</li>
                <li>pages</li>
                <li>events</li>
                <li>admin dashboard</li>
                <li>logout</li>
            </ul>
        </nav>
      </article>
    </section>
  )
}

export default HomePage