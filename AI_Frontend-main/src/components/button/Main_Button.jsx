import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Main_Button = ({ content, link }) => {
  return (
    <Link className={`${styles.button}`} to={link}>
        {content}
    </Link>
  )
}

export default Main_Button