import React from 'react'
import s from './Footer.module.css'
import sContainer from '../../common/styles/Container.module.css'
import Item from "./Item/Item";

function Footer() {
  return (
      <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerContainer}`}>
          <h2>Arthur Shogenov</h2>
            <div className={s.items}>
              <Item/>
              <Item/>
              <Item/>
              <Item/>
            </div>
          <span className={s.copyright}>© 2021 Все права защищены</span>
        </div>
      </div>
  )
}

export default Footer