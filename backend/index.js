import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000
const DATABASE_URI = "mongodb+srv://hery:hery@cluster0.yrurq.mongodb.net/?retryWrites=true&w=majority"

//Routes
//http:localhost:5000/students
app.use("/students",studentRoutes);

mongoose.connect(DATABASE_URI)
    .then(()=> console.log("Database connected"))
    .then(()=> app.listen(PORT, ()=> console.log(`server running on ${PORT}`)))
    .catch(err => console.log(err))
