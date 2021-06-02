import React from 'react'
import s from './Projects.module.css'
import sContainer from '../../common/styles/Container.module.css'
import Project from "./Projects/Project";
import Title from "../../common/components/Title";

function Projects() {
  return (
      <div className={s.projectsBlock}>
        <div className={`${sContainer.container} ${s.projectsContainer}`}>
          <Title title={'Projects'}/>
          <div className={s.projects}>
            <Project nameProject={'Social network'}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'TodoList'}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'TodoList'}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
          </div>
        </div>
      </div>
  )
}

export default Projects