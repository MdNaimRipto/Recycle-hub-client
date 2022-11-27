import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useSeller } from '../Hooks/useSeller';
import Loading from '../Pages/Shared/Loading';

const SellerRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    const location = useLocation()

    if (loading || isSellerLoading) {
        return <Loading />
    }

    if (user && isSeller) {
        return children
    }

    else {
        logout()
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default SellerRoute;