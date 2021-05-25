import React from 'react'
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'

function Contacts() {
  return (
      <div className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
          <h2>Contacts</h2>

          <form action="">
            <div className={s.inputBlock}>
              <input type="text" placeholder={'Complete the field'}/>
              <input type="text" placeholder={'Complete the field'}/>
              <textarea placeholder={'Description'}></textarea>
            </div>
          </form>
          <button>Send</button>
        </div>
      </div>
  )
}

export default Contacts