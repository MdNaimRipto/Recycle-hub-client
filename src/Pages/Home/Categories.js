import React from 'react';
import { useQuery } from "@tanstack/react-query"
import Loading from '../Shared/Loading';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const req = await fetch("http://localhost:5000/categories")
            const data = await req.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
                <h2 className='text-3xl font-bold mb-16 text-center'>Choose Your Favorite Brand</h2>
                <div className="relative grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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