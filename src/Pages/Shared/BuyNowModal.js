import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import swal from 'sweetalert';


const BuyNowModal = ({ details, setDetails }) => {
    console.log(details)
    const { user } = useContext(AuthContext)
    const { brand, img, resalePrice } = details

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const model = form.itemName.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            userName: name,
            brand: brand,
            carImage: img,
            price: resalePrice,
            email: email,
            carModel: model,
            phone: phone,
            location: location
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    setDetails(null)
                    swal("Booking Confirmed!", "Please Check Your Dashboard for Further Steps.", "success");
                }
                else {
                    setDetails(null)
                    swal("Booking Failed!", "Please Try again.", "error");
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="buyNow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-accent relative">
                    <label htmlFor="buyNow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">Please Complete the Form</h3>
                    <form onSubmit={handleBooking}>
                        <input name="name" type="text" value={user?.displayName} placeholder="Full Name"
                            className="input w-full mx-auto mb-4" disabled required />
                        <input name="email" type="email" value={user?.email} placeholder="Email Address"
                            className="input w-full mx-auto mb-4" disabled required />
                        {
                            // user?.uid &&
                            <input name="itemName"
                                className="input w-full mx-auto mb-4" value={details.name} disabled required />
                        }
                        <input name="phone" type="tel" placeholder="Phone Number"
                            className="input w-full mx-auto mb-4" required />
                        <input name="location" type="text" placeholder="Meeting Location"
                            className="input w-full mx-auto mb-4" required />
                        <button
                            type='submit'
                            className='btn btn-primary text-white font-semibold w-full'>
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyNowModal;