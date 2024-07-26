import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospitals from './pages/Dashboard/Hospitals';
import Organisations from './pages/Dashboard/Organisations';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonorList from './pages/Admin/DonorList';
import HospitalList from './pages/Admin/HospitalList';
import OrganisationList from './pages/Admin/OrganisationList';
import AdminHome from './pages/Admin/AdminHome';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <AdminHome />
            </PrivateRoute>
          }
        />
        <Route
          path='/orgn-list'
          element={
            <PrivateRoute>
              <OrganisationList />
            </PrivateRoute>
          }
        />
        <Route
          path='/donar-list'
          element={
            <PrivateRoute>
              <DonorList />
            </PrivateRoute>
          }
        />
        <Route
          path='/hospital-list'
          element={
            <PrivateRoute>
              <HospitalList />
            </PrivateRoute>
          }
        />
        <Route
          path='/donation'
          element={
            <PrivateRoute>
              <Donation />
            </PrivateRoute>
          }
        />
        <Route
          path='/donar'
          element={
            <PrivateRoute>
              <Donar />
            </PrivateRoute>
          }
        />
        <Route
          path='/hospital'
          element={
            <PrivateRoute>
              <Hospitals />
            </PrivateRoute>
          }
        />
        <Route
          path='/analytics'
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />
        <Route
          path='/consumer'
          element={
            <PrivateRoute>
              <Consumer />
            </PrivateRoute>
          }
        />
        <Route
          path='/organisation'
          element={
            <PrivateRoute>
              <Organisations />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
      </Routes>
    </>
  );
}
export default App;
