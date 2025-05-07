import React from 'react'
import styles from './HolyGrail.module.css'
const HolyGrail = () => {
  return (
    <div>
      <header className={styles.header}>Header</header>
      <div className={styles.maindiv}>
        <aside className={styles.navigation}>Navigation</aside>
        <main className={styles.main}>Main</main>
        <aside className={styles.ads}>Ads</aside>
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}

export default HolyGrail