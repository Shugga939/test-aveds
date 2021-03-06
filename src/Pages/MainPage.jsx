import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import FilledButton from "../components/ui/Buttons/FilledButton/FilledButton";
import CustomLink from "../components/ui/Link/CustomLink";
import { CONTACTS_ROUTE } from "../utils/consts";
import styles from './PageStyles.module.scss';
import imgCard1 from './../img/img1.svg'
import imgCard2 from './../img/img2.svg'
import imgCard3 from './../img/img3.svg'
import { useEffect, useState } from "react";
import LoginModal from "../components/LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/userReducer";
import List from "../components/List/List";
import Loader from "../components/ui/Loader/Loader";

function MainPage () {
  const [arrayOfCards, setArrayOfCards] =  useState([])
  const [load, setLoad] = useState(true)
  const [show, setShow] = useState(false)
  const user = useSelector(state=>state.user)
  const dispach = useDispatch()

  useEffect(()=> {
    setTimeout(()=> {  // имитация запроса для отображения лоадера
      setArrayOfCards([
        {title: 'Онлайн-прием', imgPath:imgCard1, text:'Рыба текст', url:'/reception'},
        {title: 'Экстренный Случай', imgPath:imgCard2, text:'Рыба текст', url:'/alert'},
        {title: 'Лечение рака', imgPath:imgCard3, text:'Рыба текст', url:'/cancer'}
      ])
      setLoad(false)
    },300)
  },[])

  const loginButtonHeandler = ()=> {
    if (!user) {
      return ()=> setShow(true)
    } else {
      return ()=> dispach(userLogout())
    }
   }

  function renderCards (card) {
    return (
      <Card 
        imgPath={card.imgPath} 
        title={card.title} 
        text={card.text}
        urlPath={card.url}
        key={card.title}
      />
    )
  }

  return (
    <div className={styles.mainPage}>
      <LoginModal show={show} setShow={setShow}/>
      <Header/>
      <main className={styles.mainContent}>
        <h1>Место для получения медицинской помощи</h1>
        <div className={styles.buttonContainer}>
          <FilledButton text={user? 'Выйти' : 'Войти'} type='small' callback={loginButtonHeandler()}/>
          <CustomLink text='Контакты' type='small' href={CONTACTS_ROUTE}/>
        </div>
        <div className={styles.cardsContainer}>
          {load? 
            <div className={styles.loader}> <Loader/> </div> 
            :
            <List items={arrayOfCards} renderItem={renderCards}/>
          }
        </div>
      </main>
    </div>
  )
}

export default MainPage
