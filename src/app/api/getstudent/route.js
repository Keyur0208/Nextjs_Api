import { Student } from "@/app/lib/model/student";
import { Connect_url } from "@/app/lib/studentdb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(Connect_url);
    const student_data = await Student.find();
    console.log("Students Data = ", student_data);
    return (NextResponse.json({ students: student_data, sucess: true }, { status: 200 }))
}

export async function POST(request) {
    const post_data = await request.json();
    console.log("Post Data =", post_data);
    await mongoose.connect(Connect_url);
    const student_data = new Student(post_data);
    const result = await student_data.save();
    console.log("Student Data = ", result);
    return NextResponse.json({ students: result, sucess: true }, { status: 200 })
}


export function DELETE()
{
    
}


