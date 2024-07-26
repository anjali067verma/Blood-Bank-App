import React from 'react';
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinners from '../../components/shared/Spinners';

const Register = () => {
    const { loading, error } = useSelector((state) => state.auth);

    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinners />
            ) : (
                <div className='row g-0'>
                    <div className='col-md-8 form-banner'>
                        <img
                            src="./assets/images/bloodgroup.jpg"
                            alt="registerImage"
                            style={{ maxWidth: '100%', maxHeight: '100vh', objectFit: 'cover' }}
                        />
                    </div>
                    <div className='col-md-4 form-container'>
                        <Form formTitle={"Register"} submitBtn={"Register"} formType={"register"} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
