import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [navigate, from, token])

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                setUserEmail(user?.email)
                saveGoogleUserInfo(user.displayName, user.email, user.photoURL)
                toast.success('Login Successful!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
            })
            .catch(err => {
                console.error(err)
                toast.error('Login Failed!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
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
        fetch("https://recycle-hub-server.vercel.app/users", {
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