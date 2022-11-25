import React from 'react';

const AllCar = ({ allCar, setDetails }) => {
    const { img, name, location, resalePrice, timeUsed, } = allCar
    return (
        <div data-aos="fade-up" className="flex flex-col h-full">
            <img
                src={img}
                className="object-cover w-full h-48"
                alt=""
            />
            <div className="flex-grow border border-t-0 rounded-b-xl border-accent">
                <div className="p-5 font-semibold">
                    <h6 className="mb-2 text-base md:text-base lg:text-2xl font-semibold leading-5">{name}</h6>
                    <p className="text-sm pt-1">
                        location: {location}
                    </p>
                    <p className="text-sm py-1">
                        Resale Price: {resalePrice}
                    </p>
                    <p className="text-sm pb-1">
                        Years Used: {timeUsed}
                    </p>
                </div>
                <label
                    onClick={() => { setDetails(allCar) }}
                    htmlFor="details-modal"
                    className='btn btn-primary rounded-t-none w-full text-white'>
                    View Details
                </label>
            </div>

        </div>
    );
};

export default AllCar;