import React from 'react';
// import CategoryDetailsModal from './CategoryDetailsModal';

const CategoryItem = ({ categoryItem, setDetails }) => {
    const { img, name, location, resalePrice, originalPrice, timeUsed, date } = categoryItem

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
                        Current Price: {resalePrice} / Original Price: {originalPrice}
                    </p>
                    <p className="text-sm pb-1">
                        Years Used: {timeUsed}
                    </p>
                    <p className="text-sm pb-1">
                        Added Date: {date}
                    </p>
                </div>
                <label
                    onClick={() => { setDetails(categoryItem) }}
                    htmlFor="details-modal"
                    className='btn btn-primary rounded-t-none w-full text-white'
                >
                    View Details
                </label>
            </div>
            {/* <CategoryDetailsModal details={categoryItem} /> */}
        </div>
    );
};

export default CategoryItem;