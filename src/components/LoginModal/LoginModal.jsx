import { useEffect, useState } from 'react'
import CustomInput from '../CustomInput/CustomInput'
import FilledButton from '../ui/Buttons/FilledButton/FilledButton'
import styles from './LoginModal.module.scss'
import usersList from './../../users.json'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../store/userReducer'
import { useNavigate } from 'react-router-dom'

const LoginModal = ({show, setShow}) => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const navigation = useNavigate()
  const defaultValues = {Email: '', pass: ''}
  const [regForm, setRegForm] = useState (defaultValues)
  const [wrongValue, setWrongValue] = useState ({Email:false, pass: false})
  const [errorAuth, setErrorAuth] = useState (false)
  const [errorMasage, setErrorMessage] = useState ({
    Email: 'Поле не должно быть пустым', 
    pass: 'Поле не должно быть пустым',
  })
  const [validForm, setValidForm] = useState (true)


  useEffect(()=> {  //проверка на отсутствие ошибок в инпутах
    if (!errorMasage.Email && !errorMasage.pass) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  },[errorMasage])

  useEffect(()=> {  //сброс ошибок при закрытии модалки
    setErrorAuth(false)
  },[show])


  let login = (event)=> {  
    event.preventDefault()
    if (!regForm.Email) {
      blurInput('email')
    } else if (!regForm.pass) {
      blurInput('password')
    } 
    if (regForm.Email && regForm.pass && validForm) {
      usersList.forEach((user)=> {
        if (user.Email.toLocaleLowerCase() === regForm.Email.toLocaleLowerCase()
            && user.password === regForm.pass) {
          dispatch(userLogin(user))
          setShow(false)
          setRegForm(defaultValues)
          navigation ('/profile')
        }
      })
      if (!user) {
        setErrorAuth(true)
      }
    }
  }

  function validateEmail(value) {  // валидация Email'a
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return !EMAIL_REGEXP.test(value);
  }

  let editEmail = (val)=> {  //отслеживание ошибок в инпуте email
    setRegForm({...regForm, Email: val})
    if (validateEmail(val)) {
      setErrorMessage({...errorMasage, Email:'Неверный Email'})
    } else {
      setErrorMessage({...errorMasage, Email:''})
    }
  }

  let editPass = (val)=>  {  //отслеживание ошибок в инпуте pass
    setRegForm({...regForm, pass: val})
    const validPassLength = (val.length>=6 && val.length<15) 

    if (!validPassLength ) {
      setErrorMessage({...errorMasage, pass:'Пароль должен быть не короче 6 и не длинее 15 символов'})
    } else  {
      setErrorMessage({...errorMasage, pass:'', repPass:''})
    } 
  }

  let blurInput = (inputName)=> {  //вывод ошибоки при блюре
    switch (inputName) {
      case 'email' : {
        setWrongValue({...wrongValue, Email: true})
        break;
      }
      case 'password' : {
        setWrongValue({...wrongValue, pass: true})
        break;
      }
      default : break;
    }
  }

  let closeModal = function(event) {
    if (event.target.classList.contains(styles.modalBackground)) {
      setShow(false)
    }
  }

  return(
    <div className={show? styles.modalBackground: styles.hide} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <form className = {styles.loginForm}>
          <h2>Вход</h2>
          <CustomInput className = 'email-input' name = {'email'} blur = {blurInput} value={regForm.Email} changeValue = {editEmail} title = 'E-mail'/>
          {(wrongValue.Email && errorMasage.Email) && <div className ={styles.errorMessage}>{errorMasage.Email}</div>}
          <CustomInput className = 'password-input' name = {'password'} type = {'password'} blur = {blurInput} changeValue = {editPass} value={regForm.pass} title = 'Password'/>
          {(wrongValue.pass && errorMasage.pass) && <div className ={styles.errorMessage}> {errorMasage.pass}</div>}
          <div className={styles.buttonWrapper}>
          <FilledButton typeButton='Submit' type='modal' text='Войти' callback={login}/>
          </div>
          {errorAuth && <div className ={styles.errorMessage}> {'Неверный Email или пароль'}</div>}
        </form>
      </div>
    </div>
  )
}

export default LoginModal