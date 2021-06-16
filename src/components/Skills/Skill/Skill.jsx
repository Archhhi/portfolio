import s from './Skill.module.scss';

function Skill(props) {
  return (
      <div className={s.skill}>
        <div className={s.icon} style={props.style} />
        <h3 className={s.title}>{props.title}</h3>
        <div className={s.description}>
          <span>{props.description}</span>
        </div>
      </div>
  );
}

export default Skill;