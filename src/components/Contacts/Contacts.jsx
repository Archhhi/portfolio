import React from 'react'
import s from './Contacts.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import Title from "../../common/components/Title";

function Contacts() {
  return (
      <div id={'contacts'} className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
          <Title title={'Contacts'}/>

          <form action="">
            <div className={s.inputBlock}>
              <input type="text" placeholder={'Complete the field'}/>
              <input type="text" placeholder={'Complete the field'}/>
              <textarea placeholder={'Description'}></textarea>
            </div>
          </form>
          <a className={s.viewBtn}>Send</a>
        </div>
      </div>
  )
}

export default Contacts