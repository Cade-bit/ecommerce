import styles from './Hero.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Shop online for stylish<br></br> fashion wear </h1>
                
            </div>
            <img src='https://images.pexels.com/photos/6627106/pexels-photo-6627106.jpeg?_gl=1*fskjw8*_ga*MTAwODYxMjcwLjE3ODgyMTIzMzg.*_ga_8JE65Q40S6*czE3ODgyMTIzMzgkbzEkZzEkdDE3ODgyMTMwNDEkajExJGwwJGgw' alt='Product background image'></img>
        </div>
    )
}

export default Hero
