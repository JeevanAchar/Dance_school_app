import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import HomePage from './pages/HomePage';
import PublicRoute from './routes/PublicRoute';
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './AdminDashBoard/AdminRegister';
import AdminDashboard from './AdminDashBoard/AdminDashboard';
import AcademyManagerRegister from './AcademyManager/AcademyManagerRegister';
import ViewAcademicManager from './AdminDashBoard/ViewAcademicManager';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="*" element={"page not found"} />
                    <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                    <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path='login/userRegister' element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path='/Admin' element={<AdminLogin />} />
                    <Route path='/adminRegister' element={<AdminRegister />} />
                    
                    {/* admin dash board */}
                    <Route path='/adminDashBoard' element={<AdminDashboard />}>
                        <Route path='academyManagerRegister' element={<AcademyManagerRegister />} />
                        <Route path='vewiAcademyManager' element={<ViewAcademicManager />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App