import React from 'react'
import s from './Footer.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import Item from "./Item/Item"
import Title from "../../common/components/Title";
import telegram_image from "../../assets/image/telegram_logo.png";
import linkedIn_image from "../../assets/image/Linkedin.svg.png";
import gitHub_image from "../../assets/image/github.png";

function Footer() {

  const telegram = {
    backgroundImage: `url(${telegram_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const linkedIn = {
    backgroundImage: `url(${linkedIn_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const gitHub = {
    backgroundImage: `url(${gitHub_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
      <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerContainer}`}>
          <Title title={'Arthur Shogenov'}/>
          <div className={s.items}>
            <Item
                style={telegram}
                link={'https://t.me/FRDev'}
            />
            <Item
                style={linkedIn}
                link={'https://www.linkedin.com/in/arthur-shogenov-aa792b209/'}
            />
            <Item
                style={gitHub}
                link={'https://github.com/Archhhi'}
            />
          </div>
          <span className={s.copyright}>© 2021 Все права защищены</span>
        </div>
      </div>
  )
}

export default Footer