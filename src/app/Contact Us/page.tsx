import React from "react"
import Style from "./Style/contact.module.css"
import Link from "next/link"

export default function Contact (){
    return(
        <div id="Contact">
         <h1 className={Style.heading}>Go To <span className={Style.span}><Link href="#Contact">Contact</Link></span>Page </h1>   
        <h1 className={Style.heading}>This is <span className={Style.span}><Link href="/">Home</Link></span> page</h1>
        <h1 className={Style.heading}>Go To <span className={Style.span}><Link href="#About">About</Link></span>Page </h1>
      </div>
    )
}