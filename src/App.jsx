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
import AdminRoute from './routes/AdminRoute';
import ManagerDetails from './AcademyManager/ManagerDetails';
import EditAcademicManager from './AcademyManager/EditAcademicManager';
import ViewAcademyDashBoard from './Academy/ViewAcademyDashBoard';
import BranchDashBoard from './Branch/BranchDashBoard';

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
                        {/* academy manager */}
                        <Route path='academyManagerRegister' element={<AdminRoute><AcademyManagerRegister /></AdminRoute>} />
                        <Route path='viewAcademyManager' element={<AdminRoute><ViewAcademicManager /></AdminRoute>} />
                        <Route path='managerDetails/:id' element={<AdminRoute><ManagerDetails/></AdminRoute>} />
                        <Route path='editAcademyManager/:id' element={<AdminRoute><EditAcademicManager/></AdminRoute>} />
                        {/* view academy */}
                        <Route path='viewAcacdemyDashBoard' element={<AdminRoute><ViewAcademyDashBoard/></AdminRoute>} />
                        {/* view branch */}
                        <Route path='viewBranchDashBoard' element={<AdminRoute><BranchDashBoard/></AdminRoute>} />
                        {/* view course */}
                        <Route path='' />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App