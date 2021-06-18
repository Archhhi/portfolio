import s from './Skills.module.scss';
import sContainer from '../../common/styles/Container.module.scss';
import Skill from "./Skill/Skill";
import Title from "../../common/components/Title";
import javaScript_icon from "../../assets/image/javascript-icon.png";
import react_icon from "../../assets/image/atoms.png";
import redux_icon from "../../assets/image/redux.png";
import typeScript_icon from "../../assets/image/Typescript.png";
import html_icon from "../../assets/image/HTML5png.png";
import css_icon from "../../assets/image/css-3.png";
import sass_icon from "../../assets/image/sasspng.png";
import test_icon from "../../assets/image/jest.png";

function Skills() {

  const javaScript = {
    backgroundImage: `url(${javaScript_icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const react = {
    backgroundImage: `url(${react_icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const redux = {
    backgroundImage: `url(${redux_icon})`,
    backgroundSize: '100%, 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const typeScript = {
    backgroundImage: `url(${typeScript_icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const html = {
    backgroundImage: `url(${html_icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const css = {
    backgroundImage: `url(${css_icon})`,
    backgroundSize: '85% 85%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const sass = {
    backgroundImage: `url(${sass_icon})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const tests = {
    backgroundImage: `url(${test_icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
      <div className={s.skillsBlock}>
        <div className={`${sContainer.container} ${s.skillsContainer}`}>
          <Title title={'Skills'}/>
          <div className={s.skills}>
            <Skill style={javaScript} title={'JavaScript'} description={'Promises, REST API, Axios, Closure, Context, Prototypes, DOM, LocalStorage, ES6+'}/>
            <Skill style={react} title={'React'} description={'Functional component, Class component, Hooks, HOC, Virtual DOM, JSX, Libraries...'}/>
            <Skill style={redux} title={'Redux'} description={'Redux-Thunk, Reducer, Dispatch, Action, FLUX, Connect, Store, Libraries...'}/>
            <Skill style={typeScript} title={'TypeScript'} description={'Interface, Typeof, Instanceof, Enum, Generic, TypeScript in React/Redux'}/>
            <Skill style={html} title={'HTML5'} description={'Semantics, Forms, Audio & Video, Data attribute, Slider range'}/>
            <Skill style={css} title={'CSS3'} description={'Box model, Position, Media query, Adaptive, Response, Styled component with React'}/>
            <Skill style={sass} title={'Sass'} description={'Variables, Nesting, Import, Mixin, Fragmenting, Inheritance'}/>
            <Skill style={tests} title={'Tests'} description={'Unit tests, Storybook, Snapshot, Jest, Test components'}/>
          </div>
        </div>
      </div>
  );
}

export default Skills;
