import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';
import axios from "axios"

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("https://recycle-hub-server.vercel.app/categories")
            .then(res => {
                setCategories(res.data)
            })
    }, [])
    return (
        <div>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <h2 className='text-3xl font-bold mb-16 text-center'>Choose Your Favorite Brand</h2>
                <div
                    data-aos="fade-up"
                    className="relative grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        categories.map((category, i) =>
                            <SingleCategory
                                key={i}
                                category={category}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;