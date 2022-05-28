import Header from '../components/Header/Header';
import styles from './PageStyles.module.scss';


function ContactsPage () {

  return (
    <div className={styles.contactsPage}>
      <Header/>
      <main className={styles.contactContent}>
        <h1>Контакты</h1>
      </main>
    </div>
    
  )
}

export default ContactsPage