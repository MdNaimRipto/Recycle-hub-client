import React, { useContext } from 'react';
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useBuyer } from '../../Hooks/useBuyer';

const CategoryItem = ({ categoryItem, setDetails }) => {
    const { user } = useContext(AuthContext)
    const [isBuyer] = useBuyer(user?.email)

    const { img, name, location, resalePrice, timeUsed } = categoryItem

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
                        Resale Price: TK.{resalePrice}
                    </p>
                    <div className='flex justify-between items-center'>
                        <p className="text-sm pb-1">
                            Years Used: {timeUsed}
                        </p>
                        <div className='tooltip cursor-pointer' data-tip="Add to Wishlist">
                            <MdOutlineAddCircleOutline className='text-xl' />
                        </div>
                    </div>
                </div>
                {
                    isBuyer ?
                        <label
                            onClick={() => { setDetails(categoryItem) }}
                            htmlFor="details-modal"
                            className='btn btn-primary rounded-t-none w-full text-white'
                        >
                            View Details
                        </label>
                        :
                        <div
                            className='tooltip w-full'
                            data-tip="Please use a buyer account to buy any car.">
                            <label
                                disabled
                                htmlFor="details-modal"
                                className='btn btn-primary rounded-t-none w-full text-white'
                            >
                                View Details
                            </label>
                        </div>
                }
            </div>
            {/* <CategoryDetailsModal details={categoryItem} /> */}
        </div>
    );
};

export default CategoryItem;