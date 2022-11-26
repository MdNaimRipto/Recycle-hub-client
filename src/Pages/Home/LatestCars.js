import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BuyNowModal from '../Shared/BuyNowModal';
import DetailsModal from '../Shared/DetailsModal';

const LatestCars = () => {
    const [details, setDetails] = useState(null)
    const { data: latestCars = [] } = useQuery({
        queryKey: ["latestCars"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/latestCars')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <h2 className='text-3xl font-bold mb-16 text-center'>Latest Added Cars</h2>
                <div
                    data-aos="fade-up"
                    className="relative grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        latestCars.map((category) =>
                            <div key={category._id} data-aos="fade-up" className="flex flex-col h-full">
                                <img
                                    src={category.img}
                                    className="object-cover w-full h-48"
                                    alt=""
                                />
                                <div className="flex-grow border border-t-0 rounded-b-xl border-accent">
                                    <div className="p-5 font-semibold">
                                        <h6 className="mb-2 text-base md:text-base lg:text-2xl font-semibold leading-5">{category.name}</h6>
                                        <p className="text-sm pt-1">
                                            location: {category.location}
                                        </p>
                                        <p className="text-sm py-1">
                                            Resale Price: {category.resalePrice}
                                        </p>
                                        <p className="text-sm pb-1">
                                            Added Date: {category.date}
                                        </p>
                                    </div>
                                    <label
                                        onClick={() => { setDetails(category) }}
                                        htmlFor="details-modal"
                                        className='btn btn-primary rounded-t-none w-full text-white'
                                    >
                                        View Details
                                    </label>
                                </div>
                            </div>
                        )
                    }
                    {
                        details !== null && <DetailsModal details={details} setDetails={setDetails} />
                    }
                    {
                        details !== null && <BuyNowModal details={details} />
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestCars;