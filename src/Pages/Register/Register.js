import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../src/hooks/useAuth';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo2.png'


const Register = () => {
    const { user, createUsingEmailPassword, error } = useAuth();
    const [name, setName] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUsingEmailPassword(data.username, data.email, data.password);
        setName(data.username);
    };
    return (
        <Container className="d-flex justify-content-center mt-5">
            {
                !user ? <div >
                    <div className='mb-5 text-center'>
                        <img src={logo} alt="" className='w-25' />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-container d-flex justify-content-center">
                        <div>
                            <input className="py-2 ps-2 field" type="text" placeholder="Username" {...register("username", { required: true })} />
                            {errors.username && <span className="error">This field is required</span>}

                            <input className="py-2 ps-2 field mt-4" type="email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}

                            <input className="py-2 ps-2 field mt-4" type="password" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className="error">This field is required <br /> </span>}
                            {error && <span className="error">{error}</span>}

                            <input className="py-2 ps-2 field mt-4" type="password" placeholder="Re-type Password" {...register("repassword", { required: true })} />
                            {errors.repassword && <span className="error">This field is required</span>}

                            <input className="secondary-bg text-white py-2 mt-4" type="submit" />
                        </div>

                    </form>
                    <hr />
                    <div className="text-center">
                        <NavLink className="secondary-text text-center  link-text" to="/login">Already Have an account?</NavLink>
                    </div>

                </div> :
                    <div>
                        <h3>Wellcome to Garlic Bey {name}</h3>
                    </div>
            }

        </Container>
    );
};

export default Register;