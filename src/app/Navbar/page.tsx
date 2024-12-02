import React from 'react'
import Link from 'next/link'
import style from "../Styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link href="/">MyLogo</Link>
      </div>
      <ul className={style.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#About">About</Link>
        </li>
        <li>
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
