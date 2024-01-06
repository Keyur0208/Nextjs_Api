import { Student } from "@/app/lib/model/student";
import { Connect_url } from "@/app/lib/studentdb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request,container){

    const student_id = container.params.student;
    const fillter  = {_id:student_id};
    console.log(fillter); 
    const pay_load = await request.json();
    console.log(pay_load);
    await mongoose.connect(Connect_url);
    let result = await Student.findOneAndUpdate(fillter,pay_load);

    return(
        NextResponse.json({students:result},{status:200})
    )
}


export async function GET(request,container)
{
    const data = container.params.student;
    const record = {_id:data};
    console.log(record);
    await mongoose.connect(Connect_url);
    let result = await Student.findById(record);
    console.log(result);
    return(
        NextResponse.json({students:result,sucess:true},{status:200})
    )
}

export async function DELETE(request,container)
{
    const data = container.params.student;
    const record = {_id:data};
    await mongoose.connect(Connect_url);
    let result = await Student.deleteOne(record);
    return(
        NextResponse.json({students:result,sucess:true},{status:200})
    )
}

