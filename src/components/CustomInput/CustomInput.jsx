import styles from './CustomInput.module.scss'

function CustomInput({name, type='text', title, value, changeValue, blur}) {

  return (
    <div className = {styles.inputContainer}>
      <input type={type} 
        className = {styles.input}
        required 
        placeholder = {title}
        value = {value} 
        name = {name}
        onChange = {event => changeValue(event.target.value)} 
        onBlur={(e)=>blur(e.currentTarget.name)}/>
    </div>
  );
}

export default CustomInput;