import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const MyProduct = ({ myProduct, index, refetch }) => {
    const {
        brand,
        condition,
        description,
        img,
        location,
        name,
        originalPrice,
        phone,
        resalePrice,
        timeUsed,
        seller,
    } = myProduct

    const handleAdvertise = () => {
        const advertise = {
            seller: seller,
            name: name,
            img: img,
            resalePrice: resalePrice,
            originalPrice: originalPrice,
            phone: phone,
            location: location,
            condition: condition,
            brand: brand,
            description: description,
            timeUsed: timeUsed,
            date: format(new Date(), "PP")
        }

        swal({
            title: "Are you sure?",
            text: "Are you really wanted to advertise this product!",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    fetch(`http://localhost:5000/advertisements`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(advertise)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data)
                                swal(`Product advertised successfully!`, {
                                    icon: "success",
                                });
                            }
                            else {
                                toast.error("Could not Advertised. Please Try Again")
                            }
                            fetch(`http://localhost:5000/allCars/${myProduct._id}`, {
                                method: "PATCH",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify({ advertised: true })
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    refetch()
                                })
                        })
                }
            });

    }
    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/allCars/${myProduct._id}`, {
                        method: "DELETE",
                        headers: {
                            authorization: `bearer ${localStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                console.log(data)
                                swal(`Selected product has been deleted!`, {
                                    icon: "success",
                                });
                                refetch()
                            }
                            else {
                                toast.error("Could not Delete. Please Try Again")
                            }
                        })
                }
            });
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{myProduct.name}</td>
            <td>TK.{myProduct.resalePrice}</td>
            <td className='text-primary'>
                {
                    !myProduct.paid ?
                        <p>Available</p> : <p>Sold</p>
                }
            </td>
            <td>
                {
                    !myProduct.advertised ?
                        <button
                            onClick={handleAdvertise}
                            className='btn btn-primary btn-sm text-white'>
                            Advertise
                        </button>
                        : <button className='btn btn-primary btn-sm text-white' disabled>
                            Advertise
                        </button>
                }
            </td>
            <td>
                <button
                    onClick={() => { handleDelete(myProduct._id) }}
                    className="btn btn-circle btn-sm btn-primary btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default MyProduct;