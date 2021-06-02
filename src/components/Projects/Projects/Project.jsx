import React from 'react'
import s from './Project.module.css'

function Project(props) {
  return (
      <div className={s.projectBlock}>
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

export default Project