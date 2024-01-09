"use client"
import React from "react"
import { useForm } from "react-hook-form"

export default function Demo1() {
  
    const {register , handleSubmit , formState:{errors}} = useForm();

    function myfun(){
        console.log("hello")
    }

    return (
        <>
            <div className="container p-5" >
                <form onSubmit={handleSubmit(myfun)}>
                    <label htmlFor="firstname" >First Name</label>
                    <input
                    className="form-control"
                    {...register('firstname',{required:true})}
                    />
                    {errors.firstname && <p className="text-danger" >Plz Valid Name</p>}

                    <br></br>
                    <label htmlFor="lastname" >Lastt Name</label>
                    <input 
                    className="form-control"
                    {...register('lastname',{required:true})}
                    />

                    {errors.lastname && <p className="text-danger" >Plz Valid Name</p>}

                    <div className="text-center">
                        <input type="submit" className="btn btn-success " />
                    </div>
                </form>
            </div>
        </>
    )
}


// "use client"
// import { useForm } from 'react-hook-form';

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input  {...register('firstName', { required: true })} />
//       {errors.firstName && <p>First name is required.</p>}
//       <input type="submit" />
//     </form>
//   );
// }