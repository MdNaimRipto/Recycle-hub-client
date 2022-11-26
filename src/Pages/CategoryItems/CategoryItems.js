import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyNowModal from '../Shared/BuyNowModal';
import DetailsModal from '../Shared/DetailsModal';
// import BuyNowModal from '../Shared/BuyNowModal';
// import DetailsModal from '../Shared/DetailsModal';
import CategoryBanner from './CategoryBanner';
import CategoryItem from './CategoryItem';

const CategoryItems = ({ category }) => {
    console.log(category)
    const categoryItems = useLoaderData()
    const [details, setDetails] = useState(null)
    return (
        <>
            <CategoryBanner />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div
                    className="grid gap-6 row-gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                    {
                        categoryItems.map(categoryItem =>
                            <CategoryItem
                                key={categoryItem._id}
                                categoryItem={categoryItem}
                                setDetails={setDetails}
                            />)
                    }
                </div>
            </div>
            {
                details !== null && <DetailsModal details={details} setDetails={setDetails} />
            }
            {
                details !== null && <BuyNowModal details={details} />
            }
        </>
    );
};

export default CategoryItems;