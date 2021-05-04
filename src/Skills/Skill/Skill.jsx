import s from './Skill.module.css';

function Skill(props) {
  return (
      <div className={s.skill}>
        <div className={s.icon}></div>
        <h3>{props.title}</h3>
        <div className={s.description}>
          <span>{props.description}</span>
        </div>
      </div>
  );
}

export default Skill;