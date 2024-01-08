import React from "react"
import Link from "next/link"
import './page/home/style.css'

export const metadata = {
   title: "Student Details"
}

export default function Home() {
   return (
      <>
         <div className="container">
            <h1 className="text-center text-white p-3">Task Student Database </h1>
            <div className="container mt-3" >
               <div className="cards-list">
                  <div className="card 1">
                     <Link href='/page/form' style={{textDecoration:'none'}}>
                        <div className="card_image">
                           <img src="/istockphoto-1336723114-612x612.jpg" className="w-100" />
                        </div>
                        <div className="text-center mt-3">
                           <h1 style={{color:'black'}}>Student Form</h1>
                        </div>
                     </Link>
                  </div>
                  <div className="card 2">
                     <Link href="/page/studentfetch" style={{textDecoration:'none'}}>
                        <div className="card_image">
                           <img src="/SISBanner768x728.svg" className="w-100" />
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
