import React from 'react'
import s from './Item.module.scss'

function Item({style, link}) {
  return (
      <a href={link} target={'_blank'} className={s.itemBlock} style={style}/>
  )
}

export default Item