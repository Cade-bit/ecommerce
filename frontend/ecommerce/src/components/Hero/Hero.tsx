import styles from './Hero.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Shop online for stylish<br></br> fashion wear </h1>
                
            </div>
            <img src='https://images.unsplash.com/photo-1638972574240-72ae8e61a735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Product background image'></img>
        </div>
    )
}

export default Hero
