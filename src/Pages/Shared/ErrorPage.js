import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/error.png"

const ErrorPage = () => {
    return (
        <section className="flex items-center h-screen sm:p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img src={logo} alt="" />
                <p className="font-semibold">Something Went Wrong!!! Please Try Again.</p>
                <Link rel="noOpener noReferrer"
                    to="/" className="px-8 py-3 bg-primary text-white font-semibold rounded">
                    Back to Homepage
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;