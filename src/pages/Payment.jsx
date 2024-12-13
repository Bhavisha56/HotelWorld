import React, { useState } from 'react';

const Payment = () => {
    const [transactionId, setTransactionId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('transactionId', transactionId);
        formData.append('paymentMethod', paymentMethod);
        if (paymentProof) {
            formData.append('paymentProof', paymentProof);
        }

        try {
            const response = await fetch('http://localhost:5000/validate-payment', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                alert('Payment submitted successfully! Awaiting confirmation.');
            } else {
                alert('Payment submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting payment:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded shadow-md mt-5">
            <h1 className="text-2xl font-bold text-center mb-4">Manual Payment Submission</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Transaction ID</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Payment Method</label>
                    <select
                        className="w-full px-3 py-2 border rounded"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="UPI">UPI</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Upload Payment Proof (Optional)</label>
                    <input
                        type="file"
                        className="w-full"
                        onChange={(e) => setPaymentProof(e.target.files[0])}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
                >
                    Submit Payment
                </button>
            </form>
        </div>
    );
};

export default Payment;
