import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../../store/userReducer'
import { CONTACTS_ROUTE } from '../../utils/consts'
import LoginModal from '../LoginModal/LoginModal'
import BorderedButton from '../ui/Buttons/BorderedButton/BorderedButton'
import logo from './../../img/logo.svg'
import styles from './Header.module.scss'

function Header () {
  const [show, setShow] = useState(false)
  const user = useSelector(state=>state.user)
  const dispach = useDispatch()

  const loginButtonHeandler = ()=> {
    if (!user) {
      return ()=> {
        setShow(true)
      }
    } else {
      return ()=> dispach(userLogout())
    }
   }

  return (
    <header className={styles.header}>
      <LoginModal show={show} setShow={setShow}/>
      <div className={styles.headerWrapper}>
        <NavLink to={'/'}>
          <img src={logo} alt="logo" className={styles.logo}/>
        </NavLink>
        <div className={styles.buttonsContainer}>
          <NavLink to={CONTACTS_ROUTE} className={styles.contactsLink}>Контакты</NavLink>
          <BorderedButton text={user? 'Выйти' : 'Войти'} type='header' callback={loginButtonHeandler()}/>
        </div>
      </div>
    </header>
    
  )
}

export default Header