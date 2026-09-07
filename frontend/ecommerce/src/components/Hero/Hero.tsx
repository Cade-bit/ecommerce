import styles from './Hero.module.css'
import HeroVideo from '../../assets/Herovideo.mp4'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Shop online for stylish<br></br> fashion wear </h1>
                
            </div>
            <video src={HeroVideo} autoPlay muted loop />
        </div>
    )
}

export default Hero
