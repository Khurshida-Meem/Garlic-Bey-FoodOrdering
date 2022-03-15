import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Login.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo2.png'

const Login = () => {

    const { user, signInUsingGoogle, processLogin } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        processLogin(data.email, data.password);
    };

    return (
        <div className='login-bg'>
            <Container className="d-flex justify-content-center mt-5">
                {
                    !user ? <div >
                        <div className='my-5 text-center'>
                            <img src={logo} alt="" className='w-25' />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-container d-flex justify-content-center">
                            <div>
                                <input className="py-2 ps-2 field" type="email" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input className="py-2 ps-2 field mt-4" type="password" placeholder="Password" {...register("password", { required: true })} />
                                {errors.password && <span className="error">This field is required</span>}

                                <input className="secondary-bg text-white py-2 mt-4" type="submit" />
                            </div>

                        </form>
                        <hr />
                        <div className="text-center mt-3">
                            <button className="secondary-btn border-0 px-5 py-2 auth-btn mb-3" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Sign In Using Google</button>
                            <br />
                            <NavLink className="secondary-text text-center link-text" to="/register">New to Garlic Bay?</NavLink>
                        </div>

                    </div> :
                        <div>
                            <h3>Wellcome to Garlic Bey {user.displayName}</h3>
                        </div>
                }

            </Container>
        </div>
    );
};

export default Login;