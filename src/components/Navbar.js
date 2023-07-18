import React from 'react'
import style from './Navbar.module.css'
import {NavLink } from "react-router-dom"
import './Navbar.css'


function Navbar({settat}) {

  return (
    <div>
        <header className={style.head}>
        <div className='logo'><h1>Dx-EMB</h1></div>
        <ul className={style.ul}> 
           <li> <NavLink to="/"  className={style.Link} exact activeClassName="active">หน้าแรก</NavLink> </li>
           <li><NavLink to="Emb" className={style.Link} exact activeClassName="active">ลายปัก</NavLink></li>
           <li><NavLink to="Ai" className={style.Link} exact activeClassName="active">ลายสกรีน</NavLink> </li>
           <input  type="text" placeholder="ค้นหาข้อมูล"  onChange={(even)=>{settat(even.target.value)}} />
        </ul>
      </header>   
    </div>
  )
}

export default Navbar