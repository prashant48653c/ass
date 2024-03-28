import styles from './landing.module.css'
const Landing:React.FC = () => {
  return (
    <div className={styles.container} >
        <div className={styles.landDetail} >
        <h2 className={styles.h2}>Embark on a Journey of Insight with Us!</h2>
<p className={styles.p} >Unlock the depths of knowledge and foster connections in the dynamic realm of blogging. Welcome aboard! 👋🚀</p>
        </div>
        <div className={styles.btns}>
        <button className="btnFill btn">Log in</button>
        <button className="btnFill btn">Get Started</button>
        </div>
  

    </div>
  )
}

export default Landing