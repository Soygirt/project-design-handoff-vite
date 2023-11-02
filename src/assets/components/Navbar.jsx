import React from "react"
import Logo2 from "../../../public/images/LOGO2.png"
import HamburgerBar from "../../../public/images/hamburgerBar.png"
import "./Navbar.css"


export const Navbar = () => {

    return(
     <div className="navbar">
        <img src={Logo2} alt="Logo" />
        <img src={HamburgerBar} alt="HamburgerBar" />
     </div>   
    )

}