import React from 'react';
import swal from "sweetalert";
import toast from 'react-hot-toast';

const AllSeller = ({ allSeller, index, refetch }) => {

    const handleVerify = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Are you really wanted to verify this seller!",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    fetch(`http://localhost:5000/users/${allSeller._id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ verified: true })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(data)
                                swal(`Successfully verified!`, {
                                    icon: "success",
                                });
                                refetch()
                            }
                            else {
                                toast.error("Could not verify. Please Try Again")
                            }
                        })
                }
            });
    }

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Seller!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${allSeller._id}`, {
                        method: "DELETE",
                        headers: {
                            authorization: `bearer ${localStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                console.log(data)
                                swal(`Selected Seller has been deleted!`, {
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
        <>
            {
                allSeller.user.role === "seller" &&
                <tr key={allSeller._id}>
                    <td>{index + 1}</td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={allSeller.user.img} alt="Avatar Tailwind CSS Component"
                                        referrerPolicy='no-referrer'
                                    />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{allSeller.user.name}</td>
                    <td>{allSeller.user.email}</td>
                    <td>
                        {
                            !allSeller.verified ?
                                <button
                                    onClick={() => { handleVerify(allSeller._id) }}
                                    className='btn btn-primary btn-sm text-white'>
                                    Verify
                                </button>
                                : <button
                                    disabled
                                    className='btn btn-primary btn-sm text-white'>
                                    Verified
                                </button>
                        }
                    </td>
                    <td>
                        <button
                            onClick={() => { handleDelete(allSeller._id) }}
                            className="btn btn-circle btn-sm btn-primary btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </td>
                </tr>
            }
        </>
    );
};

export default AllSeller;