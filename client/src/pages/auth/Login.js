import React from 'react';
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinners from '../../components/shared/Spinners';
const Login = () => {
    const { loading, error } = useSelector((state) => state.auth);
    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinners />
            ) : (
                <div className='row g-0'>
                    <div className='col-md-8 form-banner'>
                        <img src="./assets/images/Login_Page_Image.jpg" className='d-flex d-wrap' alt="loginImage" />
                    </div>
                    <div className='col-md-4 form-container'>
                        <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"login"} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
