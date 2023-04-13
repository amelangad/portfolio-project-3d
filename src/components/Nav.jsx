import React, { useState } from 'react'
import '../styles/Nav.css'
import { HiHome, HiUser, HiPencil, HiMail } from "react-icons/hi";
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      title: "Home",
      icon: <HiHome />,
      link: '/',
    },
    {
      id: 2,
      title: "Projects",
      icon: <HiPencil />,
      link: 'projects',
    },
    {
      id: 3,
      title: "Contact me",
      icon: <HiMail />,
      link: 'contact',
    },

  ];

  return (
    <nav className={`nav ${open ? 'open' : 'close'}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onLoad={() => setShow(true)}>
      <ul className="nav__menu">
        {menuItems.map(item => <li className="nav__menu--link" key={item.id}>
        <Link to={item.link} className="link__wrapper"> <i className="link__icon">{item.icon}</i>
            <h1 className={`link__text ${open ? 'open' : 'close'}`}>{item.title}</h1></Link>
        </li>
        )}
      </ul>
    </nav>
  )
}