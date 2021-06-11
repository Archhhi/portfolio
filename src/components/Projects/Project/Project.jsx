import React from 'react'
import s from './Project.module.css'

function Project({nameProject, style, description}) {
  return (
      <div className={s.projectBlock}>
        <div className={s.projectImage} style={style}>
          <a href={''}>Watch</a>
        </div>
        <div className={s.description}>
          <h3 className={s.descriptionTitle}>{nameProject}</h3>
          <p className={s.descriptionParagraph}>{description}</p>
        </div>
      </div>
  )
}

export default Project