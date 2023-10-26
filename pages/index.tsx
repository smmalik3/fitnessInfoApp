import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

type Section = 'GoodFood' | 'BadFood' | 'TravelStrategy' | 'Occasions' | 'Tips';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section | null>('GoodFood'); // Set 'GoodFood' as the default

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
        <meta name="description" content="Things to keep in mind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Things to keep in mind &rarr;</h2>
            <div className="btn-group" role="group" aria-label="categories">
              <button onClick={() => toggleSection('GoodFood')} type="button" className="btn btn-secondary">Good Food</button>
              <button onClick={() => toggleSection('BadFood')} type="button" className="btn btn-secondary">Bad Food</button>
              <button onClick={() => toggleSection('TravelStrategy')} type="button" className="btn btn-secondary">Travel Strategy</button>
              <button onClick={() => toggleSection('Occasions')} type="button" className="btn btn-secondary">Occasions</button>
              <button onClick={() => toggleSection('Tips')} type="button" className="btn btn-secondary">Tips</button>
            </div>

            {activeSection === 'GoodFood' && 
            <ol className="list-group">
              <li className="list-group-item">
                Chicken Breast
              </li>
              <li className="list-group-item">
                Chicken Thigh (skinless)
              </li>
              <li className="list-group-item">
                Lean Beef (90% lean or better)
              </li>
              <li className="list-group-item">
                Low Fat Ghee (45 calories per 5g)
              </li>
              <li className="list-group-item">
                White Fish
              </li>
              <li className="list-group-item">
                Hot Sauce (check nutrition info)
              </li>
              <li className="list-group-item">
                Spices
              </li>
              <li className="list-group-item">
                Vinaigrette (moderate amount)
              </li>
              <li className="list-group-item">
                Black Coffee
              </li>
            </ol>}
            {activeSection === 'BadFood' && 
            <ol className="list-group">
              <li className="list-group-item">
                Sugar
              </li>
              <li className="list-group-item">
                Desserts
              </li>
              <li className="list-group-item">
                Olive Oil
              </li>
              <li className="list-group-item">
                Fatty Beef (80% lean or more)
              </li>
              <li className="list-group-item">
                Salmon
              </li>
              <li className="list-group-item">
                Fried food
              </li>
              <li className="list-group-item">
                Butter
              </li>
              <li className="list-group-item">
                Salad Dressing
              </li>
              <li className="list-group-item">
                Condiments like ketchup, mayo, mustard
              </li>
            </ol>}
            {activeSection === 'TravelStrategy' && 
            <ol className="list-group">
              <li className="list-group-item">
                Get Steps/Workout in early in the day
              </li>
              <li className="list-group-item">
                Prioritize protein, then carbs, then fat for meals
              </li>
              <li className="list-group-item">
                Err on the side of caution, eat less than you think
              </li>
              <li className="list-group-item">
                Bring protein bars
              </li>
            </ol>}
            {activeSection === 'Occasions' && 
            <ol className="list-group">
              <li className="list-group-item">
                Similar strategy to travel
              </li>
              <li className="list-group-item">
                Prioritize protein, then carbs, then fat for meals
              </li>
              <li className="list-group-item">
                Workout and get steps in before the event
              </li>
              <li className="list-group-item">
                Err on the side of caution, eat less than you think
              </li>
            </ol>}
            {activeSection === 'Tips' && 
              <ol className="list-group">
                <li className="list-group-item">
                  If you know your week will get busy, front load your steps and workouts.
                </li>
                <li className="list-group-item">
                  Consider your daily step average and multiply by 7, get this total number of steps every week.
                </li>
                <li className="list-group-item">
                  Don't worry if you mess up, just know how to get back on track and do this immediately.
                </li>
              </ol>}
          </div>
        </div>
      </main>
    </div>
  );
}