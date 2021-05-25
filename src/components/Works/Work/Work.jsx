import React from 'react'
import s from './Work.module.css'

function Work(props) {
  return (
      <div className={s.workBlock}>
        <div className={s.workImage}>
          <a href={''}>See</a>
        </div>
        <div className={s.description}>
          <h4>{props.nameProject}</h4>
          <p>{props.description}</p>
        </div>
      </div>
  )
}

export default Work