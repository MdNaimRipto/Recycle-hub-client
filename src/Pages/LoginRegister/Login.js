import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')
    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
    }
    return (
        <div className='flex items-center justify-center my-12'>
            <div className="w-[96%] md:w-[30%] px-5 py-6 border border-info rounded-xl font-semibold">
                <h2 className='text-center text-3xl font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='mb-5'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email Address is Required" })}
                            aria-invalid={errors.email ? true : false}
                            className="input input-bordered w-full font-normal" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is Required"
                            })}
                            aria-invalid={errors.password ? true : false}
                            className="input input-bordered w-full font-normal" />
                    </div>
                    <button className='text-xs font-semibold mt-2 mb-5'>
                        Forgot Password?
                    </button>
                    <input className='btn btn-primary text-white w-full' type="submit" value="Login" />
                    {errors.password &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.password?.message}
                        </p>}
                    {errors.email &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.email?.message}
                        </p>}
                    {
                        loginError &&
                        <p className='text-red-500 text-center my-3 font-semibold'>
                            {loginError}
                        </p>
                    }
                </form>
                <p className='text-sm text-center font-semibold text-neutral mt-3 mb-5'>
                    New To Doctor's Portal?
                    <Link to="/register" className='text-primary ml-1'>Create New Account</Link>
                </p>
                <div className="divider">OR</div>
                <GoogleLogin />
            </div>
        </div >
    );
};

export default Login;