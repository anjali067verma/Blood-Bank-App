import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../style/Layout.css';
const Menubar = () => {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation();
    return (
        <div>
            <div className='sidebar'>
                <div className='menu'>
                    {user?.role === 'organisation' && (
                        <>
                            <div className={`menu-item ${location.pathname === '/' && 'active'}`}>
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/">Inventory</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/donar' && 'active'}`}>
                                <i className="fa-solid fa-hand-holding-medical"></i>
                                <Link to="/donar">Donor</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/hospital' && 'active'}`}>
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/hospital">Hospital</Link>
                            </div>
                        </>
                    )}
                    {user?.role === 'admin' && (
                        <>
                            <div className={`menu-item ${location.pathname === '/donar-list' && 'active'}`}>
                                <i className="fa-solid fa-warehouse"></i>
                                <Link to="/donar-list">Donor List</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/hospital-list' && 'active'}`}>
                                <i className="fa-solid fa-hospital"></i>
                                <Link to="/hospital-list">Hospital List</Link>
                            </div>
                            <div className={`menu-item ${location.pathname === '/orgn-list' && 'active'}`}>
                                <i className="fa-sharp fa-solid fa-building-ngo"></i>
                                <Link to="/orgn-list">Organisation List</Link>
                            </div>
                        </>
                    )}
                    {(user?.role === 'donar' || user?.role === 'hospital') && (
                        <div className={`menu-item ${location.pathname === '/organisation' && 'active'}`}>
                            <i className="fa-sharp fa-solid fa-building-ngo"></i>
                            <Link to="/organisation">Organisation</Link>
                        </div>
                    )}
                    {user?.role === 'hospital' && (
                        <div className={`menu-item ${location.pathname === '/consumer' && 'active'}`}>
                            <i className="fa-solid fa-hospital-user"></i>
                            <Link to="/consumer">Consumer</Link>
                        </div>
                    )}
                    {user?.role === 'donar' && (
                        <div className={`menu-item ${location.pathname === '/donation' && 'active'}`}>
                            <i className="fa-solid fa-hand-holding-droplet"></i>
                            <Link to="/donation">Donation</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Menubar;
