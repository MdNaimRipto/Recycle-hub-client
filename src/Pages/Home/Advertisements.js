import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import BuyNowModal from '../Shared/BuyNowModal';
import DetailsModal from '../Shared/DetailsModal';
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useBuyer } from '../../Hooks/useBuyer';

const Advertisements = () => {
    const { user } = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)

    const [details, setDetails] = useState(null)
    const { data: advertisements = [] } = useQuery({
        queryKey: ["advertisements"],
        queryFn: async () => {
            const res = await fetch('https://recycle-hub-server.vercel.app/advertisements')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            {
                advertisements.length &&
                <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                    <h2 className='text-3xl font-bold mb-16 text-center'>Latest Advertisements</h2>
                    <div
                        data-aos="fade-up"
                        className="relative grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                        {
                            advertisements.map((advertisement) =>
                                <div key={advertisement._id} data-aos="fade-up" className="flex flex-col h-full">
                                    <img
                                        src={advertisement.img}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                    <div className="flex-grow border border-t-0 rounded-b-xl border-accent">
                                        <div className="p-5 font-semibold">
                                            <h6 className="mb-2 text-base md:text-base lg:text-2xl font-semibold leading-5">{advertisement.name}</h6>
                                            <p className="text-sm pt-1">
                                                location: {advertisement.location}
                                            </p>
                                            <p className="text-sm py-1">
                                                Resale Price: TK.{advertisement.resalePrice}
                                            </p>
                                            <div className='flex justify-between items-center'>
                                                <p className="text-sm pb-1">
                                                    Years Used: {advertisement.timeUsed}
                                                </p>
                                                <div className='tooltip cursor-pointer' data-tip="Add to Wishlist">
                                                    <MdOutlineAddCircleOutline className='text-xl' />
                                                </div>
                                            </div>
                                        </div>
                                        <label
                                            onClick={() => { setDetails(advertisement) }}
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
                            details !== null && <DetailsModal details={details} />
                        }
                        {
                            details !== null && <BuyNowModal details={details} setDetails={setDetails} />
                        }
                    </div>
                </div>
            }
        </div>
    );
};


export default Advertisements;