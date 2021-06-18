import React from 'react'
import s from './Options.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import Title from "../../common/components/Title";

function Options() {
  return (
      <div className={s.optionsBlock}>
        <div className={`${sContainer.container} ${s.optionsContainer}`}>
          <Title title={'Considering remote work'} />
            <a href={'#contacts'} className={s.viewBtn}>Hire me</a>
        </div>
      </div>
  )
}

export default Options