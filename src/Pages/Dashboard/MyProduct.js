import React from 'react';

const MyProduct = ({ myProduct, index }) => {
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
                    !myProduct.paid ?
                        <button className='btn btn-primary btn-sm text-white'>
                            Advertise
                        </button>
                        : <button className='btn btn-primary btn-sm text-white' disabled>
                            Advertise
                        </button>
                }
            </td>
            <td>
                <button className="btn btn-circle btn-sm btn-primary btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default MyProduct;