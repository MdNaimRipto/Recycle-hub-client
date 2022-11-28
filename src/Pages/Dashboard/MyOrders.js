import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useQuery } from "@tanstack/react-query"
import Loading from '../Shared/Loading';
import PaymentModal from './PaymentModal';

const MyOrders = () => {
    const { user, logout } = useContext(AuthContext)

    const [paymentInfo, setPaymentInfo] = useState(null)
    const [paidStatus, setPaidStatus] = useState(null)

    const url = `http://localhost:5000/orders?email=${user?.email}`
    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            });
            if (res.status === 401 || res.status === 403) {
                logout()
            }
            else {
                const data = await res.json();
                return data
            }
        }
    })

    console.log(orders)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto my-8 font-semibold'>
            {
                !orders.length ?
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
                                        <th>Car Image</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) =>
                                            <tr key={order._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squire rounded w-24 h-24">
                                                                <img src={order.carImage} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{order.brand}</td>
                                                <td>{order.carModel}</td>
                                                <td>TK.{order.price}</td>
                                                <td>
                                                    {
                                                        <label
                                                            className='btn btn-sm btn-primary text-white'
                                                            htmlFor="payment-modal"
                                                            onClick={() => { setPaymentInfo(order) }}
                                                        >
                                                            Buy Now
                                                        </label>
                                                    }
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
            }
            {
                paymentInfo &&
                <PaymentModal
                    setPaidStatus={setPaidStatus}
                    paymentInfo={paymentInfo}
                    setPaymentInfo={setPaymentInfo}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default MyOrders;