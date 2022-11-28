import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import Loading from '../Shared/Loading';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const { user, logout } = useContext(AuthContext)
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ["myOrders", user?.displayName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts?seller=${user?.displayName}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logout()
            }
            else {
                const data = await res.json()
                return data
            }
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto my-8 font-semibold'>
            {
                !myProducts.length ?
                    <h2 className='text-3xl text-center my-6'>
                        Please Add Any Products to Your Cart First!!!
                    </h2>
                    :
                    <>
                        <h2 className='text-3xl mb-6'>MY ORDERS</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Car Model</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Advertise</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myProducts.map((myProduct, index) =>
                                            <MyProduct
                                                myProduct={myProduct}
                                                index={index}
                                                key={index}
                                                refetch={refetch}
                                            />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyProducts;