import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {

    const { user, signInUsingGoogle, processLogin } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        processLogin(data.email, data.password);
    };

    return (
        <Container className="d-flex justify-content-center mt-5">
            {
                !user ? <div >
                    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                        <input className="py-2 ps-2 field" type="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className="py-2 ps-2 field mt-4" type="password" placeholder="Password" {...register("password", { required: true })} />
                        {errors.password && <span className="error">This field is required</span>}

                        <input className="secondary-bg text-white py-2 mt-4" type="submit" />
                    </form>
                    <div className="text-center">
                        <button className="secondary-btn border-0 px-5 py-2 auth-btn mb-3" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Sign In Using Google</button>
                        <br />
                        <NavLink className="secondary-text text-center" to="/register">New to Garlic Bay?</NavLink>
                    </div>

                </div> :
                    <div>
                        <h3>Wellcome to Garlic Bey {user.displayName}</h3>
                    </div>
            }

        </Container>
    );
};

export default Login;