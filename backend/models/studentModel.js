import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentShema = new Schema({
    name: {
        type: String,
        min:3,
        required: true
    },
    surname: {
        type: String,
        min:3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    }
})

const studentModel = mongoose.model('student',studentShema);
export default studentModel;
