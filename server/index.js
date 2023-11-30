import express from "express";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const app=express();
app.use(express.json())

const connectMongoDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    if (connection) {
        console.log('Connected to MongoDB');
    }
}
connectMongoDB();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})