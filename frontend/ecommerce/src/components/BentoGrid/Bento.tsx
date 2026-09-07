import styles from './Bento.module.css'

function Bento() {
    return (
        <div className={styles.bentoContainer}>
            <div className={styles.topRow}>
                <div className={styles.card}>
                    <img src='https://cdn.prod.website-files.com/6a8cd64040b3330e4e690bbc/6a8cd64240b3330e4e690ca4_Space%20Kit%20Images%2003.jpg' alt='Place an image from your latest collection here'></img>
                </div>
                <div className={styles.cardBig}>
                    {/* <h6>Shop the latest collection</h6> */}
                    <img src='https://cdn.prod.website-files.com/6a8cd64040b3330e4e690bbc/6a8cd64240b3330e4e690ca3_Space%20Kit%20Images%2002.jpg' alt='Place the main image of your collection here'></img>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.card2}>

                </div>
                <div className={styles.cardBig2}>

                </div>
            </div>
        </div>
    )
}

export default Bento
