import studentModel from "../models/studentModel.js"

export const getAllStudents = async (req,res,next) => {
    //recuperer tous les etudiants
    try {
        const students = await studentModel.find();
        return res.status(200).json({students});
    } catch (error) {
        return console.log(error.message)
    }
}

export const newStudent = (req,res,next)=>{
    const {name,surname,email} = req.body
    try {
        const student = studentModel.create({name,surname,email})
        return res.status(201).json({message: "new student add"})
    } catch (error) {
        return console.log(error)
    }
}

export const editStudent = async (req,res,next)=>{
    const id = req.params.id
    const {name,surname,email,dateOfBirth} = req.body
    try {
        const student = await studentModel.findByIdAndUpdate(id,{name,surname,email,dateOfBirth})
        return res.status(202).json({student})
    } catch (error) {
        return console.log(error)
    }
}

export const deleteStudent = async (req,res,next) =>{
    const id = req.params.id
    try {
        await studentModel.findByIdAndDelete(id)
        return res.status(204).json({message:"Student delete"})
    } catch (error) {
        return console.log(error)
    }
}