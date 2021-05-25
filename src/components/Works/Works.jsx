import React from 'react'
import s from './Works.module.css'
import sContainer from '../../common/styles/Container.module.css'
import Work from "./Work/Work";

function Works() {
  return (
      <div className={s.worksBlock}>
        <div className={`${sContainer.container} ${s.worksContainer}`}>
          <h2>My Works</h2>

          <div className={s.works}>
            <Work nameProject={'Social network'}
                  description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Work nameProject={'TodoList'}
                  description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}/>
          </div>
        </div>
      </div>
  )
}

export default Works