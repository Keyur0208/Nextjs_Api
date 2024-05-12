import mongoose from "mongoose";

const studentdeatils = mongoose.Schema({
    rno:Number,
    first_name:String,
    last_name:String,
    address:String,
    mail:String,
    mobile:Number,
    gender:String,
    bdate:String,
    semester:Number,
    rno:Number,
    class_details:String,
    course_details:String,
    clg:String
});

export const Student = mongoose.models.studentsdata || mongoose.model("studentsdata",studentdeatils);