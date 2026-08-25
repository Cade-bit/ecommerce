import styles from './HomePage.module.css'

import Hero from "../components/Hero/Hero";

function HomePage() {
  return (
      <main className={styles.main}>
          <Hero />
        <div className={styles.intro}>
            Homepage
        </div>
        </main>
  );
}

export default HomePage;
