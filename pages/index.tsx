import React, { useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import ExperienceList from '../components/ExperienceList/ExperienceList'

const Home: NextPage = () => {

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className={styles.container}>
      <Header aboutRef={aboutRef} experienceRef={expRef} contactRef={contactRef} />
      <Head>
        <title>Pedro Acevedo Portafolio</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Pedros portafolio
        </h1>

        <p className={styles.description}>
          Look up at
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/PedroAcevedo" className={styles.card}>
            <h2>Githup page &rarr;</h2>
            <p>Find some of my repositories.</p>
          </a>

          <a href="https://www.linkedin.com/in/pedroacevedo242497/" className={styles.card}>
            <h2>Linkedlin &rarr;</h2>
            <p>To join to my network!</p>
          </a>

          <a
            href="https://orcid.org/0000-0003-0814-7675"
            className={styles.card}
          >
            <h2>ORCID &rarr;</h2>
            <p>To see about my research interest.</p>
          </a>
        </div>
      </main>

      <main className={styles.main} ref={aboutRef}>

        <h5 className={styles.subsectionTitle}>
          About me
        </h5>

        <p>In construction...</p>

      </main>

      <main className={styles.main} ref={expRef}>

        <h5 className={styles.subsectionTitle}>
          Experience
        </h5>

        <ExperienceList />

      </main>

      <main className={styles.main} ref={contactRef}>

        <h5 className={styles.subsectionTitle}>
          Contact
        </h5>

        <p>In construction...</p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/PedroAcevedo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/github-logo.png" alt="Github Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
