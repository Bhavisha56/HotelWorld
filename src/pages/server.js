import express from 'express';
import multer from 'multer';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' }); // Set up multer for file uploads

app.post('/validate-payment', upload.single('paymentProof'), (req, res) => {
    const { transactionId, paymentMethod } = req.body;
    const paymentProof = req.file;

    console.log('Transaction ID:', transactionId);
    console.log('Payment Method:', paymentMethod);

    if (paymentProof) {
        console.log('Payment proof uploaded:', paymentProof.filename);
        // Move file to desired directory or process as needed
    }

    // Simulate manual validation by admin
    res.json({ success: true, message: 'Payment submitted successfully!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
