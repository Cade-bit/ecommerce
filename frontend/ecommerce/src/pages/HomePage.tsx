import styles from './HomePage.module.css'

import Hero from "../components/Hero/Hero";
import Bento from '../components/BentoGrid/Bento';

function HomePage() {
  return (
      <main className={styles.main}>
          <Hero />
            <div className={styles.bentoSection}>
              <Bento />
            </div>
        </main>
  );
}

export default HomePage;
