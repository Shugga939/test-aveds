import { useNavigate } from 'react-router-dom'
import styles from './Card.module.scss'

function Card ({imgPath, title, text, urlPath}) {

  let navigation = useNavigate()
  const redirect = ()=> {
    navigation(urlPath)     //  path don't write in router
  }

  return (
    <div className={styles.card} onClick={redirect}>
      <img src={imgPath} alt=""/>
      <h5> {title} </h5>
      <div className={styles.line}/>
      <p> {text} </p>
    </div>
    
  )
}

export default Card