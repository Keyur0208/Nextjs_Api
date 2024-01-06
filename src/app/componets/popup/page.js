"use client"
import { useState } from "react"
import './style.css'

export default function Popup() {
    const [Open, setOpen] = useState(false)

    const Close = () => {
        return setOpen(false);
    }

    const Mymodel = () => {
        return (
            <>
                <div className="popup-center">
                    <div className="popup-box w-50" >
                        <div className="popup-title" >
                            <h1>Model Box</h1>
                        </div>
                        <div className="popup-text" >
                            <h1>iocn</h1>
                            <p>hleoo kndcimesodc</p>
                        </div>
                        <hr></hr>
                        <button onClick={()=>setOpen(false)} className="btn btn-outline-success m-3" >Close</button>
                    </div>
                </div>

            </>
        );
    };

    return (
        <div className="container" >
            <button onClick={() => setOpen(true)} class="show" >Show Open</button>
            {Open && <Mymodel />}
        </div>
    )
}