import Back from "@/app/componets/back";
import Delete from "@/app/componets/delete";
import { BASE_API_URL } from "@/app/lib/studentdb";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"

export const metadata = {
    title: "Student Records"
}

export async function Getstudentdetails() {
    let data = await fetch(`${BASE_API_URL}/api/getstudent`, { cache: 'no-store' });
    data = await data.json();
    return data.students;
}

export default async function student() {

    let students = await Getstudentdetails();
    console.log(students);

    return (
        <div className="container" >
            <h1 className="text-center text-white pt-5" >Students Information</h1>
            <div className="text-end">
                <Link href="/form">
                    <button className="btn btn-light">
                        <FontAwesomeIcon icon={faPlus} className="px-1"  style={{height:'1.2rem'}}/>
                        Add Student
                    </button>
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table mt-2 text-center table-hover  table-bordered border-dark"  >
                    <thead className="table-success table-bordered border-dark" >
                        <tr >
                            <th>Student Rno</th>
                            <th>Student Name</th>
                            <th>Student Details</th>
                            <th>Student Update</th>
                            <th>Student Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((item, idex) => {
                                return (
                                    <tr >
                                        <td key={idex} >{item.rno}</td>
                                        <td key={idex}>{item.first_name} {item.last_name}</td>
                                        <td><a href={`/student/${item._id}`} >Go To Details</a></td>
                                        <td>
                                            <button className="btn btn-primary btn-sm" >
                                                <Link href={`/student/update/${item._id}`} className="text-white" >Update</Link>
                                            </button>
                                        </td>
                                        <td><Delete id={item._id} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Back link='/' />
        </div>
    )
}
