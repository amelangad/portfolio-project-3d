import React, {useState} from 'react'
import '../styles/Nav.css'
import { HiMail, HiUser } from "react-icons/hi";

export default function Nav() {
    const [open, setOpen] = useState(false);



  return (
   <nav className ={`nav ${open? 'open' : 'close'}`}
   onMouseEnter={()=>setOpen(true)}
   onMouseLeave = {()=>setOpen(false)}
   onLoad = {() => setShow(true)}>
    <ul className ="nav__menu">
        <li className = "nav__menu--link">
            <i className ="menu__icon"><HiUser/></i> <a className ={`menu__text ${open? 'open' : 'close'}`} >About me</a>
            </li>
            <li className = "nav__menu--link">
            <i className ="menu__icon"><HiMail/></i> <a className ={`menu__text ${open? 'open' : 'close'}`} >Contact me</a>
            </li>
            <li className = "nav__menu--link">
            <i className ="menu__icon"><HiMail/></i> <a className ={`menu__text ${open? 'open' : 'close'}`} >Contact me</a>
            </li>
    </ul>
   </nav>
  )
}