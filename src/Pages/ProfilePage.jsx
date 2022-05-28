import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header/Header';
import BorderedButton from '../components/ui/Buttons/BorderedButton/BorderedButton';
import FilledButton from '../components/ui/Buttons/FilledButton/FilledButton';
import { userLogout } from '../store/userReducer';
import { CONTACTS_ROUTE } from '../utils/consts';
import styles from './PageStyles.module.scss';

function ProfilePage () {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)

  return (
    <div className={styles.profilePage}>
      <Header/>
      <main className={styles.profileContent}>
        <h1>{`Привет, ${user.name}`}</h1>
        <div className={styles.buttonsContainer}>
          <FilledButton text='Выйти из аккаунта' type='large' callback={()=>dispatch(userLogout())}/>
          <NavLink to={CONTACTS_ROUTE}>
            <BorderedButton text='Перейти в контакты' type='large'/>
          </NavLink>
        </div>
        <h2>{`Ваш Email: ${user.Email}`} </h2>
        <h2>{`Дата рождения: ${user.birthday}`} </h2>
      </main>
    </div>
  )
}

export default ProfilePage
