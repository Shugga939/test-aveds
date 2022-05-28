import styles from './BorderedButton.module.scss'


function BorderedButton ({text, type, callback}) {  // type: header, small, large

  return (
    <button 
      type='button' 
      className={styles[type]}
      onClick={callback}>   
      {text}
    </button>
    
  )
}

export default BorderedButton