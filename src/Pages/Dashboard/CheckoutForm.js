import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../../CSS/common.css"
import swal from 'sweetalert';

const CheckoutForm = ({ paymentInfo, setPaymentInfo, refetch, setPaidStatus }) => {
    const stripe = useStripe()
    const elements = useElements()

    const { price, userName, email, _id } = paymentInfo
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log(error)
            setCardError(error.message);
            return;
        }
        setProcessing(true)
        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );
        if (confirmErr) {
            setCardError(confirmErr.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price: price,
                transactionId: paymentIntent.id,
                email: email,
                paid: true,
                bookingId: _id,
            }
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        setCardError('')
                        swal("Payment Successful!", "Your payment is successful.", "success");
                        setProcessing(false)
                        setPaymentInfo(null)
                        refetch()
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='py-4 my-6'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                // color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    className='btn btn-neutral text-white w-full disabled-btn'
                    disabled={!stripe || !clientSecret || processing}>
                    Confirm Payment
                </button>
            </form>
            <p className='text-red-500 text-center font-semibold mt-2'>{cardError}</p>
        </>
    );
};

export default CheckoutForm;