import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import AllBuyer from './AllBuyer';

const AllBuyers = () => {
    const { data: allBuyers, isLoading, refetch } = useQuery({
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
                                                <AllBuyer
                                                    allBuyer={allBuyer}
                                                    index={index}
                                                    key={allBuyer._id}
                                                    refetch={refetch}
                                                />
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