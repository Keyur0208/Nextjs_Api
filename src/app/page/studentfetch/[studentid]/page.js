import Link from "next/link";
import Imgae_delete from "../../../componets/delete_bg";
import { BASE_API_URL } from "@/app/lib/studentdb";

export const metadata = {
  title: "Student Details"
}

async function studentdetails(studentid) {
  let data = await fetch(`${BASE_API_URL}/api/getstudent/${studentid}` ,{cache:"no-store"});
  data = await data.json();
  return data.students;
}

export default async function Page({ params }) {

  console.log(params);
  const student = await studentdetails(params.studentid);
  console.log(student);

  return (
    <main className="container-fluid">
      <div className="py-lg-5 pt-3" >
        <h1 className="text-center text-white">Students Details</h1>
      </div>
      <div className="student-profile py-4">
        <div className="container">
          <div className="row gy-2">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img className="profile_img" alt="" src="/profile.png" />
                  <h3>{student.first_name} {student.last_name}</h3>
                </div>
                <div className="card-body text-center">
                  <p className="mb-0"><strong className="pr-1">Course:</strong>{student.course_details}</p>
                  <p className="mb-0"><strong className="pr-1">Class:</strong>{student.class_details}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-8 col-lg-8 col-xl-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered text-start">
                    <tbody>
                      <tr>
                        <th width="30%">Roll No</th>
                        <td width="2%">:</td>
                        <td>{student.rno}</td>
                      </tr>
                      <tr>
                        <th width="30%">Birth Date</th>
                        <td width="2%">:</td>
                        <td>{student.bdate}</td>
                      </tr>
                      <tr>
                        <th width="30%">Gender</th>
                        <td width="2%">:</td>
                        <td>{student.gender}</td>
                      </tr>
                      <tr>
                        <th width="30%">Aderess</th>
                        <td width="2%">:</td>
                        <td>{student.address}</td>
                      </tr>
                      <tr>
                        <th width="30%">Mobile Number</th>
                        <td width="2%">:</td>
                        <td>{student.mobile}</td>
                      </tr>
                      <tr>
                        <th width="30%">Mail</th>
                        <td width="2%">:</td>
                        <td>{student.mail}</td>
                      </tr>
                      <tr>
                        <th width="30%">Semester</th>
                        <td width="2%">:</td>
                        <td>{student.semester}</td>
                      </tr>
                      <tr>
                        <th width="30%">College</th>
                        <td width="2%">:</td>
                        <td>{student.clg}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="container pb-2" style={{ display: 'flex', justifyContent: 'space-around' }} >
                  <div>
                    <Link href="/page/studentfetch">
                      <button className="btn btn-secondary">
                        <img src="/backward-solid.svg" className="p-1" />
                        Back
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href={`/page/studentfetch/update/${student._id}`}>
                      <button className="btn btn-primary">
                        <img src="/pen-nib-solid.svg" className="p-1" />
                        Update
                      </button>
                    </Link>
                  </div>
                  <Imgae_delete id={student._id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
