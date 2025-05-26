import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import About from '../components/About/About'
import ExperienceList from '../components/ExperienceList/ExperienceList'
import ProjectList from '../components/ProjectList/ProjectList'
import BackToTopButton from '../components/BackToTopButton/BackToTopButton'
import PublicationList from '../components/PublicationList/PublicationList'
import MainSection from './mainSection';
import Script from 'next/script';

const Home: NextPage = () => {

  const aboutRef = useRef(null);
  const pubRef = useRef(null);
  const proRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  const [CurrentRef, SetCurrentRef] = useState(0);
  const [IsScrolling, SetIsScrolling] = useState(false);


  useEffect(() => {
    const onscroll = () => SetIsScrolling(true);;
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  const ChangeCurrentRef = (current: number, visible: boolean) => {
    if (visible && IsScrolling) {
      SetCurrentRef(current);
      console.log("The current is " + current);
      SetIsScrolling(false);
    }
  };

  return (
    <>
      <Header aboutRef={aboutRef} pubRef={pubRef} projectsRef={proRef} experienceRef={expRef} contactRef={contactRef} currentRef={CurrentRef} />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-846J8ECS8R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-846J8ECS8R');
        `}
      </Script>
      
      <div className={styles.container}>
        <Head>
          <title>Pedro Acevedo Portafolio</title>
        </Head>
        <MainSection key={0} sectionId={0} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={aboutRef}>
            <About />
          </main>
        </MainSection>

        <MainSection key={1} sectionId={1} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={pubRef}>
            <h5 className={styles.subsectionTitle}>
              Publications
            </h5>

            <hr className={styles.separationLine}></hr>

            <PublicationList />
          </main>
        </MainSection>

        <MainSection key={2} sectionId={2} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={expRef}>

            <h5 className={styles.subsectionTitle}>
              Experience
            </h5>

            <hr className={styles.separationLine}></hr>

            <ExperienceList />
          </main>
        </MainSection>

        <MainSection key={3} sectionId={3} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={proRef}>

            <h5 className={styles.subsectionTitle}>
              Personal Projects
            </h5>

            <hr className={styles.separationLine}></hr>

            <ProjectList />

          </main>
        </MainSection>

        <MainSection key={4} sectionId={4} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={contactRef}>

            <h5 className={styles.subsectionTitle}>
              Contact
            </h5>

            <hr className={styles.separationLine}></hr>

            <GetInTouch />
          </main>
        </MainSection>

        <BackToTopButton />

        <footer className={styles.footer}>
          <hr className={styles.separationLine}></hr>
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
    </>
  )
}

export default Home
