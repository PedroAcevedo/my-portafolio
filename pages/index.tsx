import React, { useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import About from '../components/About/About'
import ExperienceList from '../components/ExperienceList/ExperienceList'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'

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
        <Intro />
      </main>

      <main className={styles.main} ref={aboutRef}>

        <h5 className={styles.subsectionTitle}>
          About me
        </h5>

        <About />

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

        <GetInTouch />

      </main>
      
      <BackToTopButton />

      <footer className={styles.footer}>
        <a
          href="https://github.com/PedroAcevedo/my-portafolio"
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
