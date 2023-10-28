import styles from './Avatar.module.css'

export function Avatar({ avatarUrl, hasBorder = true }){
  
  return(
    <img 
      src={avatarUrl} 
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
    />
  )
}