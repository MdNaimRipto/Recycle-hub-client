import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useAdmin } from '../../Hooks/useAdmin';
import { useBuyer } from '../../Hooks/useBuyer';
import { useSeller } from '../../Hooks/useSeller';
import AllBuyers from './AllBuyers';
import MyOrders from './MyOrders';
import MyProducts from './MyProducts';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            {
                isBuyer && <MyOrders />

            }
            {
                isSeller && <MyProducts />
            }
            {
                isAdmin && <AllBuyers />
            }
        </div>
    );
};

export default Dashboard;