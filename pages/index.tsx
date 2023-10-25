import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

type Section = 'GoodFood' | 'BadFood' | 'TravelStrategy' | 'Occasions' | 'Extra';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const toggleSection = (section: Section) => {
    if (activeSection === section) {
      // If the same section is clicked again, hide it
      setActiveSection(null);
    } else {
      // If a different section is clicked, show it
      setActiveSection(section);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Information App</title>
        <meta name="description" content="Fitness Information App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Fitness Info App &rarr;</h2>
            <p>Click the buttons dude</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button onClick={() => toggleSection('GoodFood')} type="button" className="btn btn-secondary">Good Food</button>
              <button onClick={() => toggleSection('BadFood')} type="button" className="btn btn-secondary">Bad Food</button>
              <button onClick={() => toggleSection('TravelStrategy')} type="button" className="btn btn-secondary">Travel Strategy</button>
              <button onClick={() => toggleSection('Occasions')} type="button" className="btn btn-secondary">Occasions</button>
              <button onClick={() => toggleSection('Extra')} type="button" className="btn btn-secondary">Extra</button>
            </div>

            {activeSection === 'GoodFood' && <p>Good Food Section</p>}
            {activeSection === 'BadFood' && <p>Bad Food Section</p>}
            {activeSection === 'TravelStrategy' && <p>Travel Strategy Section</p>}
            {activeSection === 'Occasions' && <p>Occasions Section</p>}
            {activeSection === 'Extra' && <p>Extra Section</p>}
          </div>
        </div>
      </main>
    </div>
  );
}