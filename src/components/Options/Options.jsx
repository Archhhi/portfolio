import React from 'react'
import s from './Options.module.css'
import sContainer from '../../common/styles/Container.module.css'

function Options() {
  return (
      <div className={s.optionsBlock}>
        <div className={`${sContainer.container} ${s.optionsContainer}`}>
          <h2>Considering remote work</h2>
          <button>Hire me</button>
        </div>
      </div>
  )
}

export default Options