import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaSmile } from 'react-icons/fa';

const Checkout = () => {
    const { name, img, details, instructor, duration, fee } = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl md:text-6xl text-center'>Checkout our <span className='font-bold'>{name}</span> course <FaSmile className='inline' /></h2>
            <div className='md:flex items-center md:mt-12'>
                <div className='mx-3 mt-3 md:w-1/2'>
                    <img className='rounded' src={img} alt="" />
                    <p className='text-xl'>Instructor: <span className='font-bold'>{instructor}</span></p>
                    <p>Duration: {duration} weeks</p>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-3xl text-center'>Payment</h2>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Student Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Student Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Fee</span>
                            </label>
                            <input type="text" defaultValue={fee} readOnly placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment Method</span>
                            </label>
                            <input type="text" placeholder="Card/Bkash Acc No" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;