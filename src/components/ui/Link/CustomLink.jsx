import { NavLink } from "react-router-dom"
import styles from './CustomLink.module.scss'


function CustomLink ({text, type, href}) {  

  return (
    <NavLink
      to={href} 
      className={styles[type]}>
      {text}
    </NavLink>

    
  )
}

export default CustomLink