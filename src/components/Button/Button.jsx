import styles from './Button.module.css'
export const Button = (props) => {

  const {isOutline_btn,icon,text}=props;

  return (
    <button className={isOutline_btn?styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}

      </button>
  )
}