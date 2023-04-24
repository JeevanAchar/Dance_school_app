import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import HomePage from './pages/HomePage'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/'  element={<Login/>}/>
                    <Route path='/userRegister' element={<Register/>} />
                    <Route path='/homePage' element={<HomePage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App