import React from 'react';
import { GoVerified } from "react-icons/go"

const DetailsModal = ({ details }) => {
    const {
        img,
        name,
        brand,
        condition,
        date,
        discreption,
        location,
        originalPrice,
        resalePrice,
        timeUsed,
        seller,
        verified
    } = details
    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="bg-accent rounded-xl relative">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                            <div>
                                <img
                                    className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                    src={img}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                        Model: {name}
                                    </h2>
                                    <p
                                        className="text-bas md:text-lg pb-2 flex items-center w-[40%]">
                                        {
                                            verified && <GoVerified className='text-blue-600 mr-3' />
                                        }
                                        <small className='font-semibold'>
                                            <span>Seller:</span> {seller}
                                        </small>
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Brand:</span> {brand}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Location:</span> {location}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Added:</span> {date}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Condition:</span> {condition}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Time Used:</span> {timeUsed}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold mr-1'>
                                            Resale Price:
                                        </span> {resalePrice} /
                                        <span className='font-semibold ml-1'>
                                            Original Price:
                                        </span> {originalPrice}
                                    </p>
                                    <p className="text-bas md:text-lg pb-2">
                                        <span className='font-semibold'>Description:</span> {discreption}
                                    </p>
                                    <label htmlFor="buyNow-modal" className="btn btn-primary w-full mt-3">
                                        Book Now
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsModal;