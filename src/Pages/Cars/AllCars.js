import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BuyNowModal from '../Shared/BuyNowModal';
import DetailsModal from '../Shared/DetailsModal';
import Loading from "../Shared/Loading"
import AllCar from './AllCar';
import AllCarsBanner from './AllCarsBanner';

const AllCars = () => {
    const [details, setDetails] = useState(null)
    const { data: allCars = [], isLoading } = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allCars")
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <AllCarsBanner />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div
                    className="grid gap-6 row-gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                    {
                        allCars.map(allCar =>
                            <AllCar
                                key={allCar._id}
                                allCar={allCar}
                                setDetails={setDetails}
                            />)
                    }
                </div>
            </div>
            {
                details !== null && <DetailsModal details={details} setDetails={setDetails} />
            }
            {
                <BuyNowModal />
            }
        </>
    );
};

export default AllCars;