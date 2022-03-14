import React from 'react'
import style from '../styles/navleft.module.css'

export default function Navleft({user}) {
  return (
    <div className={style.nav_left}>
      <h1 className={style.user_name}>{user.name}</h1>
      <img className={style.user_image} src={user.url}/>
    </div>
  )
}
