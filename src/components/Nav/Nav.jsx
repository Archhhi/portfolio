import s from "./Nav.module.scss";

function Nav() {
  return (
      <nav className={s.nav}>
        <ul>
          <a href=""><li>Главная</li></a>
          <a href=""><li>Скиллы</li></a>
          <a href=""><li>Работы</li></a>
          <a href=""><li>Контакты</li></a>
        </ul>
      </nav>
  );
}

export default Nav;
