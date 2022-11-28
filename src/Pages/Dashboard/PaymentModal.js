import React from 'react';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentModal = ({ paymentInfo, setPaymentInfo, refetch, setPaidStatus }) => {
    const { userName, carModel, price } = paymentInfo
    return (
        <>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="payment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="pb-4 text-primary">Hello, {userName}</p>
                    <h3 className="text-xl pb-4 font-bold">Your Ordered Car {carModel}</h3>
                    <h3 className="text-xl pb-4 font-bold">Please Pay total: TK.{price}</h3>

                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                setPaidStatus={setPaidStatus}
                                paymentInfo={paymentInfo}
                                setPaymentInfo={setPaymentInfo}
                                refetch={refetch}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentModal;