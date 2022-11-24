import React from 'react';
import { Link } from "react-router-dom"

const SingleCategory = ({ category }) => {
    const { img, name, id } = category
    return (
        <Link
            to={`/category/${id}`}
            className="flex flex-col justify-between overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl text-center">
            <button className="p-5">
                <div
                    className="flex items-center justify-center w-20 h-10 mb-4 rounded-full mx-auto">
                    <img src={img} alt="" />
                </div>
                <p className="mb-2 font-semibold text-2xl">{name}</p>
            </button>
        </Link>
    );
};

export default SingleCategory;