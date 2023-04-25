import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import HomePage from './pages/HomePage'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/'  element={<PublicRoute><Login/></PublicRoute>}/>
                    <Route path='/userRegister' element={<PublicRoute><Register/></PublicRoute>} />
                    <Route path='/homePage' element={<PrivateRoute><HomePage/></PrivateRoute>} />
                </Routes>
            </Router>
        </>
    )
}

export default App