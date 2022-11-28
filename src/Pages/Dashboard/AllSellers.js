import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import AllSeller from './AllSeller';

const AllSellers = () => {
    const { data: allSellers, isLoading, refetch } = useQuery({
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
                !allSellers.length ?
                    <h2 className='text-3xl text-center my-6'>
                        No Sellers Available!!!
                    </h2>
                    :
                    <>
                        <h2 className='text-3xl mb-6'>All Sellers</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Avatar</th>
                                        <th>Seller Name</th>
                                        <th>Seller Email</th>
                                        <th>Verify Seller</th>
                                        <th>Delete Seller</th>
                                    </tr>
                                </thead>
                                {
                                    <tbody>
                                        {
                                            allSellers.map((allSeller, index) =>
                                                <AllSeller
                                                    allSeller={allSeller}
                                                    index={index}
                                                    key={allSeller._id}
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

export default AllSellers;