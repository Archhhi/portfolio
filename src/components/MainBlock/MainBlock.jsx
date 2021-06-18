import s from './MainBlock.module.scss';
import sContainer from '../../common/styles/Container.module.scss';

function MainBlock() {
  return (
      <div className={s.mainBlock}>
        <div className={`${sContainer.container} ${s.mainContainer}`}>
          <div className={s.greetingText}>
            <span>Hi There!</span>
            <h1>I am Arthur Shogenov</h1>
            <p>Front-end Developer</p>
          </div>
          <div className={s.greetingPhoto}/>
        </div>
      </div>
  );
}

export default MainBlock;
