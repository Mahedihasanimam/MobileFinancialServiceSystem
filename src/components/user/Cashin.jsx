import React from 'react';
import { useForm } from 'react-hook-form';

const Cashin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Cashin successful!');
    };

    return (
        <div className="max-w-4xl w-full mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Cash in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        className={`w-full px-4 py-2 mt-2 border rounded-lg ${errors.amount ? 'border-red-500' : 'border-gray-300'}`}
                        type="number"
                        step="0.01"
                        {...register("amount", { required: "Amount is required", min: { value: 0.01, message: "Amount must be greater than zero" } })}
                    />
                    {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Source</label>
                    <select
                        className={`w-full px-4 py-2 mt-2 border rounded-lg ${errors.source ? 'border-red-500' : 'border-gray-300'}`}
                        {...register("source", { required: "Source is required" })}
                    >
                        <option value="" disabled selected>Select source</option>
                        <option value="bank">Bank Account</option>
                        <option value="credit_card">Credit Card</option>
                    </select>
                    {errors.source && <p className="text-red-500 text-xs mt-1">{errors.source.message}</p>}
                </div>
                
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Cashin
                </button>
            </form>
        </div>
    );
};

export default Cashin;
