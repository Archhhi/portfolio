import s from './Skills.module.css';
import sContainer from '../../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../../common/components/Title";

function Skills() {
  return (
      <div className={s.skillsBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
          <Title title={'Skills'}/>
          <div className={s.skills}>
            <Skill title={'Js'} description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.'}/>
            <Skill title={'Css'} description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.'}/>
            <Skill title={'React'} description={'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum.'}/>
          </div>
        </div>
      </div>
  );
}

export default Skills;
