import React from 'react'
import s from './Projects.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import Project from './Project/Project'
import Title from '../../common/components/Title'
import social_image from './../../assets/image/social-media.png'
import todo_image from './../../assets/image/GettyImages.jpg'
import dg_image from './../../assets/image/dg.jpg'
import currency_image from './../../assets/image/currency.jpg'
import KanbanBoard_image from './../../assets/image/canban-board.png'
import ContactCards_image from './../../assets/image/Preview.png'

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
  const counter = {
    backgroundImage: `url(${dg_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const currency = {
    backgroundImage: `url(${currency_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const KanbanBoard = {
    backgroundImage: `url(${KanbanBoard_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const ContactCards = {
    backgroundImage: `url(${ContactCards_image})`,
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
                     link={'https://Archhhi.github.io/social-network'}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'TodoList'}
                     style={todoList}
                     link={'https://Archhhi.github.io/todoList'}
                     description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,'}
            />
            <Project nameProject={'Counter'}
                     style={counter}
                     link={'https://Archhhi.github.io/counter-app'}
                     description={'It’s not wrong to say that perfection in web design is something that doesn\'t really exist. But that doesn\'t mean'}
            />
            <Project nameProject={'Currency converter'}
                     style={currency}
                     link={'https://Archhhi.github.io/currency'}
                     description={'It’s not wrong to say that perfection in web design is something that doesn\'t really exist. But that doesn\'t mean'}
            />
            <Project nameProject={'Kanban board'}
                     style={KanbanBoard}
                     link={'https://Archhhi.github.io/kanban-board'}
                     description={'It’s not wrong to say that perfection in web design is something that doesn\'t really exist. But that doesn\'t mean'}
            />
            <Project nameProject={'Contact cards'}
                     style={ContactCards}
                     link={'https://Archhhi.github.io/contact-cards'}
                     description={'It’s not wrong to say that perfection in web design is something that doesn\'t really exist. But that doesn\'t mean'}
            />
          </div>
        </div>
      </div>
  )
}

export default Projects