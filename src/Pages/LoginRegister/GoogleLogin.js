import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                saveUserInfo(user.displayName, user.email, user.photoURL)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const saveUserInfo = (name, email, img) => {
        const user = {
            name: name,
            email: email,
            img: img,
            role: "buyer"
        }
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <button
            className='btn btn-primary btn-outline font-semibold text-neutral w-full'
            onClick={handleGoogleLogin}
        >
            CONTINUE WITH GOOGLE
        </button>
    );
};

export default GoogleLogin;