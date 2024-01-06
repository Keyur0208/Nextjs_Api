"use client"
import { useRouter } from "next/navigation";

export default function Imgae_delete(props) {
    const router = useRouter();
    const deletestudent = async () => {
        let student_id = props.id;
        let data = await fetch("http://localhost:3000/api/getstudent/" + student_id, {
            method: "DELETE"
        });
        data = await data.json();
        if (data.sucess) {
            alert("Delete Student Record");
            router.push("/student")
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