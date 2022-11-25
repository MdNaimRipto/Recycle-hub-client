import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imageHostingKey = process.env.REACT_APP_imgBB_key
    const handleRegister = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role
        const img = data.img[0];
        const formData = new FormData();
        formData.append("image", img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const user = {
                        name: name,
                        email: email,
                        img: imgData.data.url,
                        role: role
                    }
                    console.log(user)
                }
            })
        console.log(name, email, password, img)
    }

    return (
        <div className='flex items-center justify-center my-12'>
            <div className="w-[96%] md:w-3/5 lg:w-[33%] px-5 py-6 border border-info font-semibold rounded-xl">
                <h2 className='text-center text-3xl font-semibold'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "User Name Required" })}
                            aria-invalid={errors.name ? true : false}
                            className="input input-bordered w-full font-normal" />
                    </div>
                    <div className='my-3'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email Address Required" })}
                            aria-invalid={errors.email ? true : false}
                            className="input input-bordered w-full font-normal"
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            className='input input-bordered w-full font-normal'
                            {...register("password",
                                {
                                    required: "Password Required",
                                    minLength: {
                                        value: 6,
                                        message: "Password Must Be At Least 6 Characters or Higher"
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[0-9])/,
                                        message: "Password Must an Uppercase and a Number"
                                    }
                                })}
                        />
                    </div>
                    <div className='mb-6'>
                        <div className='flex items-center ml-1'>
                            <div className='mr-3'>
                                <p>Select User Type:</p>
                            </div>
                            <div className='flex justify-between items-center w-1/5 mr-2'>
                                <p>Buyer</p>
                                <input
                                    type="radio"
                                    value="buyer"
                                    className='input input-bordered w-1/4 font-normal'
                                    {...register("role", { required: "User Role Required" })}
                                />
                            </div>
                            <div className='flex justify-between items-center w-1/5'>
                                <p>Seller</p>
                                <input
                                    type="radio"
                                    value="seller"
                                    className='input input-bordered w-1/4 font-normal'
                                    {...register("role", { required: "User Role Required" })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <input
                            type="file"
                            {...register("img", {
                                required: "Image is Required"
                            })}
                            aria-invalid={errors.img ? true : false}
                            className="file-input file-input-bordered w-full" />
                    </div>
                    <input type="submit" className='btn btn-primary text-white w-full' value="Register" />
                    {
                        errors.name &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.name?.message}
                        </p>
                    }
                    {
                        errors.email &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.email?.message}
                        </p>
                    }
                    {
                        errors.password &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.password?.message}
                        </p>
                    }
                    {errors.img &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.img?.message}
                        </p>}
                </form>

                <p className='text-sm text-center font-semibold mt-3 mb-5'>
                    Already Have an Account?
                    <Link to="/login" className='text-primary ml-1'>Login Now</Link>
                </p>
                <div className="divider">OR</div>
                <GoogleLogin />
            </div>
        </div>
    );
};

export default Register;