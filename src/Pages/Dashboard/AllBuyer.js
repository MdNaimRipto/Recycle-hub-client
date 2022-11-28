import React from 'react';
import swal from "sweetalert";
import toast from 'react-hot-toast';

const AllBuyer = ({ allBuyer, index, refetch }) => {

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Buyer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${allBuyer._id}`, {
                        method: "DELETE",
                        headers: {
                            authorization: `bearer ${localStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                console.log(data)
                                swal(`Selected Buyer has been deleted!`, {
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
                allBuyer.user.role === "buyer" &&
                <tr key={allBuyer._id}>
                    <td>{index + 1}</td>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={allBuyer.user.img} alt="Avatar Tailwind CSS Component"
                                        referrerPolicy='no-referrer'
                                    />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{allBuyer.user.name}</td>
                    <td>{allBuyer.user.email}</td>
                    <td>
                        <button
                            onClick={() => { handleDelete(allBuyer._id) }}
                            className="btn btn-circle btn-sm btn-primary btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </td>
                </tr>
            }
        </>
    );
};

export default AllBuyer;