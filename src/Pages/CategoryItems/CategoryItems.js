import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryBanner from './CategoryBanner';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const categoryItems = useLoaderData()
    console.log(categoryItems)
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
                            />)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryItems;