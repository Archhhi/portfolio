import React from 'react'
import s from './Title.module.scss'

function Title({title}) {
  return (
      <div className={s.title}>
        <h2>{title}</h2>
      </div>
  )
}

export default Title