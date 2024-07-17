import React from 'react';
import { useForm } from 'react-hook-form';

const Cashout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('Cashout successful!');
    };

    return (
        <div className="max-w-4xl w-full mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Cashout</h1>
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
                    <label className="block text-gray-700">Recipient's Bank Account Number</label>
                    <input
                        className={`w-full px-4 py-2 mt-2 border rounded-lg ${errors.accountNumber ? 'border-red-500' : 'border-gray-300'}`}
                        type="text"
                        {...register("accountNumber", { required: "Account number is required" })}
                    />
                    {errors.accountNumber && <p className="text-red-500 text-xs mt-1">{errors.accountNumber.message}</p>}
                </div>
                
                <button
                    type="submit"
                    className="w-full px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                    Cashout
                </button>
            </form>
        </div>
    );
};

export default Cashout;
