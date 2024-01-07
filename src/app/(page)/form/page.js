"use client"
import { useState } from "react";
import "./style.css"
import Back from "@/app/componets/back";
import { BASE_API_URL } from "@/app/lib/studentdb";


export default function Form() {

    // input value 

    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [address, setaddress] = useState("");
    const [mail, setmail] = useState("");
    const [mobile, setmobile] = useState("");
    const [gender, setgender] = useState("");
    const [bdate, setbdate] = useState("");
    const [semester, setsemester] = useState("");
    const [rno, setrno] = useState("");
    const [clg, setclg] = useState("");

    // Casecading Dropdown

    const [data, setName] = useState({
        course_name: "",
        class_name: ""
    });


    let class_name;
    const course_name = ['Couse', 'BCA', 'BBA', 'BCOM'];
    const bca_class = ['Class', 'FYBCA', 'SYBCA', 'TYBCA'];
    const bba_class = ['Class', 'FYBBA', 'SYBBA', 'TYBBA'];
    const bcom_class = ['Class', 'FYBCOM', 'SYBCOM', 'TYBCOM'];


    if (data.course_name === "BCA") {

        class_name = bca_class.map((bca_class, key) => <option key={key} value={bca_class}>{bca_class}</option>)

    } else if (data.course_name === "BBA") {

        class_name = bba_class.map((bba_class, key) => <option key={key} value={bba_class}>{bba_class}</option>)

    } else {

        class_name = bcom_class.map((bcom_class, key) => <option key={key} value={bcom_class}>{bcom_class}</option>)
    }

    const coursess = course_name.map((course_name, key) => <option key={key} value={course_name}>{course_name}</option>)


    function handleCountry(e) {

        setName({ ...data, course_name: e.target.value });

    }

    function handleStateChange(e) {
        setName({ ...data, class_name: e.target.value });
    }

    let class_details;
    let course_details;


    // Api Call By Submit Button  

    async function submit() {

        if (!first_name || !last_name || !address || !mail || !mobile || !gender || !bdate || !rno || !semester || !clg || !course_details || !class_details) {
            alert("Plz Feels Your Form")
        }
        else {
            let data = await fetch(`${BASE_API_URL}/api/getstudent`, {
                method: "POST",
                body: JSON.stringify({ first_name, last_name, address, mail, mobile, gender, bdate, rno, semester, clg, course_details, class_details })
            });
            data = await data.json();
            console.log(data)
            alert("SucessFull Data")
        }
    }

    return (
        <main className="container-fluid" >
            <div className="p-lg-5 p-2 ">
                <h2 className="title-form text-center">STUDENT INFORMATION FORM</h2>
                <form action="/studentfetch" >
                    <div className="student-details" >
                        <div className="container p-3" style={{ marginTop: '-1rem' }} >
                            <div className="row gy-3">
                                <div className="col-12 col-sm-12 col-md-6 col-lg ">
                                    <input type="text" placeholder="First Name" className="form-control" required autoFocus
                                        value={first_name}
                                        onChange={(e) => setfirst_name(e.target.value)} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg ">
                                    <input type="text" placeholder="Last Name" className="form-control" required
                                        value={last_name}
                                        onChange={(e) => setlast_name(e.target.value)} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <input type="text" placeholder="Address" className="form-control" required
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)} />
                            </div>
                            <div className="row gy-3 pt-3">
                                <div className="col-12 col-sm-12 col-md-6 col-lg ">
                                    <input type="mail" placeholder="Email" className="form-control" required
                                        value={mail}
                                        onChange={(e) => setmail(e.target.value)} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg ">
                                    <input type="number" placeholder="Mobile Number" className="form-control" required
                                        value={mobile}
                                        onChange={(e) => setmobile(e.target.value)} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="row gy-3" >
                                    <div className="col-12 col-sm-12 col-mg-4 col-lg-4 pt-2">
                                        <div className="d-flex">
                                            <div>
                                                <h6 className="pt-2">Gender:</h6>
                                            </div>
                                            <div className="px-2 d-flex text-center w-100" >
                                                <div className="form-control">
                                                    <input type="radio" className="mx-0 mx-lg-2" name="gender"
                                                        value="Male"
                                                        onChange={(e) => setgender(e.target.value)} />Male
                                                </div>
                                                <div className="form-control mx-2">
                                                    <input type="radio" className="mx-0 mx-lg-2" name="gender"
                                                        value="Female"
                                                        onChange={(e) => setgender(e.target.value)} />Female
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-mg-4 col-lg-4 pt-2 text-center" >
                                        <div className="d-flex">
                                            <div>
                                                <h6 className="pt-2">Birth Date :</h6>
                                            </div>
                                            <div className="px-2">
                                                <input type="date" className="form-control" required
                                                    value={bdate}
                                                    onChange={(e) => setbdate(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-mg-4 col-lg-4 pt-2 text-center" >
                                        <select className="form-select form-control  course-option" value={course_details = data.course_name} onChange={handleCountry}>
                                            {coursess}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <div className="row gy-3" >
                                    <div className="col-12 col-lg-4 text-center" >
                                        <div className="radio-button course-option">
                                            <select className="form-select form-control  course-option" value={class_details = data.class_name} onChange={handleStateChange}>
                                                {class_name}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 text-center" >
                                        <div className="radio-button">
                                            <select className="form-select form-control  course-option" onChange={(e) => setsemester(e.target.value)} >
                                                <option>Semester</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="3">4</option>
                                                <option value="3">5</option>
                                                <option value="6">6</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 text-center" >
                                        <input type="Number" placeholder="Rno" className="form-control " required
                                            value={rno}
                                            onChange={(e) => setrno(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <input type="text" placeholder="Collage Name" className="form-control" required
                                    value={clg}
                                    onChange={(e) => setclg(e.target.value)} />
                            </div>
                            <div className="pt-3">
                                <input type="submit" className="form-control btn btn-success" onClick={submit} />
                            </div>
                        </div>
                    </div>
                </form>
                <Back link='/' />
            </div>
        </main >
    )
}

