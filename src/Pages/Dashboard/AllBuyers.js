import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AllBuyers = () => {
    const { data: allBuyers, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            })
            const data = res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto my-8 font-semibold'>
            {
                !allBuyers.length ?
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
                                        <th>Avatar</th>
                                        <th>Buyer Name</th>
                                        <th>Buyer Email</th>
                                        <th>Delete Buyer</th>
                                    </tr>
                                </thead>
                                {
                                    <tbody>
                                        {
                                            allBuyers.map((allBuyer, index) =>
                                                allBuyer.user.role === "buyer" &&
                                                <tr key={allBuyer._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={allBuyer.user.img} alt="Avatar Tailwind CSS Component"
                                                                        referrerPolicy='no-referrer'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{allBuyer.user.name}</td>
                                                    <td>{allBuyer.user.email}</td>
                                                    <td>
                                                        <button
                                                            // onClick={() => { handleDelete(myProduct._id) }}
                                                            className="btn btn-circle btn-sm btn-primary btn-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                }
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default AllBuyers;