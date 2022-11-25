import { format } from 'date-fns';
import React from 'react';


const BuyNowModal = ({ details }) => {
    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="buyNow-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-accent relative">
                    <label htmlFor="buyNow-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-3">Please Complete the Form</h3>
                    <form >
                        <input name="name" type="text" placeholder="Full Name"
                            className="input w-full mx-auto mb-4" disabled />
                        <input name="email" type="email" placeholder="Email Address"
                            className="input w-full mx-auto mb-4" disabled />
                        {
                            // user?.uid &&
                            <input name="itemName"
                                className="input w-full mx-auto mb-4" disabled />
                        }
                        <input name="phone" type="tel" placeholder="Phone Number"
                            className="input w-full mx-auto mb-4" />
                        <input name="phone" type="tel" placeholder="Meeting Location"
                            className="input w-full mx-auto mb-4" />
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