"use client"
import { BASE_API_URL } from "../lib/studentdb";

export default function Imgae_delete(props) {
    const deletestudent = async () => {
        let student_id = props.id;
        let data = await fetch(`${BASE_API_URL}/api/getstudent/` + student_id, {
            method: "DELETE"
        });
        data = await data.json();
        if (data.sucess) {
            alert("Delete Student Record");
        }
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={deletestudent}>
                <img src="/trash-solid.svg" className="p-1" />
                Delete
            </button>
        </div>
    )
}