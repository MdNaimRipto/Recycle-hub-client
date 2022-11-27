import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useBuyer } from '../Hooks/useBuyer';
import Loading from '../Pages/Shared/Loading';

const BuyerRoute = ({ children }) => {
    const { user, loading, logout } = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

    const location = useLocation()

    if (loading || isBuyerLoading) {
        return <Loading />
    }

    if (user && isBuyer) {
        return children
    }

    else {
        logout()
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default BuyerRoute;