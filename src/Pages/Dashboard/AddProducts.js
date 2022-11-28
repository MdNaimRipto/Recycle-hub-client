import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../ContextProvider/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom"

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const imageHostingKey = process.env.REACT_APP_imgBB_key
    const navigate = useNavigate()

    const handleAddProduct = (data) => {
        const sellerName = user?.displayName
        const productName = data.name;
        const resalePrice = data.resalePrice;
        const originalPrice = data.originalPrice;
        const phone = data.phone;
        const location = data.location;
        const condition = data.condition;
        const brand = data.brand;
        const description = data.description;
        const used = data.time

        const category_id = brand.split(" ")[0]
        const categoryName = brand.split(' ')[1]

        const img = data.img[0]

        const formData = new FormData();
        formData.append("image", img);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const car = {
                        seller: sellerName,
                        name: productName,
                        img: imgData.data.url,
                        resalePrice: resalePrice,
                        originalPrice: originalPrice,
                        phone: phone,
                        location: location,
                        condition: condition,
                        brand: categoryName,
                        description: description,
                        timeUsed: used,
                        category_id: category_id,
                        verified: false,
                        paid: false,
                        date: format(new Date(), "PP")
                    }
                    fetch('https://recycle-hub-server.vercel.app/allCars', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(car)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            swal("Successfully Added!", "Your Product Added Successfully.", "success");
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }
    return (

        <div>
            <h2 className='text-3xl mt-12 mb-6 text-center lg:text-left'>Add a Car</h2>
            <form
                className='w-1/2 mb-12 mx-auto lg:mx-0'
                onSubmit={handleSubmit(handleAddProduct)}>
                <input
                    className="input input-bordered w-full my-4"
                    {...register("name")} placeholder="Product name" />
                <input
                    className="input input-bordered w-full my-4"
                    {...register("resalePrice")} placeholder="Resale price" />
                <input
                    className="input input-bordered w-full my-4"
                    {...register("originalPrice")} placeholder="original price" />
                <input
                    className="input input-bordered w-full my-4"
                    {...register("phone")} placeholder="Phone Number" />
                <input
                    className="input input-bordered w-full my-4"
                    {...register("location")} placeholder="Your location" />
                <input
                    className="input input-bordered w-full my-4"
                    {...register("time")} placeholder="Time used" />
                <input
                    type="file"
                    className="file-input file-input-bordered w-full my-4"
                    {...register("img")} />
                <select
                    className="input input-bordered w-full my-4"
                    {...register("condition", { required: true })}>
                    <option>Select Condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                </select>
                <select
                    className="input input-bordered w-full my-4"
                    {...register("brand", { required: true })}>
                    <option>Select Brand / Category</option>
                    <option value="01 Nissan">Nissan</option>
                    <option value="02 Toyota">Toyota</option>
                    <option value="03 BMW">BMW</option>
                </select>
                <textarea
                    className='w-full textarea textarea-bordered h-32 px-2 my-4 rounded-md'
                    {...register("description")} placeholder="add a small description about car" />
                <input className="btn btn-primary w-full" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;