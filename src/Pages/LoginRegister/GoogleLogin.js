import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useToken } from '../../Hooks/useToken';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    if (token) {
        navigate(from, { replace: true })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                setUserEmail(user?.email)
                saveGoogleUserInfo(user.displayName, user.email, user.photoURL)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const saveGoogleUserInfo = (name, email, img) => {
        const user = {
            name: name,
            email: email,
            img: img,
            role: "buyer"
        }
        console.log(user)
        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ user })
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