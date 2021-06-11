import React from 'react'
import s from './Projects.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import Project from './Project/Project'
import Title from '../../common/components/Title'
import social_image from './../../assets/image/social-media.png'
import todo_image from './../../assets/image/GettyImages.jpg'

function Projects() {

  const social = {
    backgroundImage: `url(${social_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const todoList = {
    backgroundImage: `url(${todo_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
      <div className={s.projectsBlock}>
        <div className={`${sContainer.container} ${s.projectsContainer}`}>
          <Title title={'Projects'}/>
          <div className={s.projects}>
            <Project nameProject={'Social network'}
                     style={social}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'TodoList'}
                     style={todoList}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'TodoList'}
                     description={'It’s not wrong to say that perfection in web design is something that doesn\'t really exist. But that doesn\'t mean'}
            />
          </div>
        </div>
      </div>
  )
}

export default Projects