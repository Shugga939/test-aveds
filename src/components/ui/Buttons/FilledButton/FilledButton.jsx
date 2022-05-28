import styles from './FilledButton.module.scss'


function FilledButton ({typeButton = 'button', text, type, callback}) {  // type: small, large, modal

  return (
    <button 
      type={typeButton}
      className={styles[type]}
      onClick={callback}>   
      {text}
    </button>
    
  )
}

export default FilledButton