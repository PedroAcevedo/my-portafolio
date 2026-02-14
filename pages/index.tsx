import React, { useCallback, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import About from "../components/About/About";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import PublicationList from "../components/PublicationList/PublicationList";
import ItemList from "../components/ItemList/ItemList";
import NewsList from "../components/NewsList/NewsList";
import MainSection from "./mainSection";
import Script from "next/script";
import MetaData from "../public/metadata.json";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const teachRef = useRef<HTMLElement | null>(null);
  const serviceRef = useRef<HTMLElement | null>(null);
  const pubRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const [CurrentRef, SetCurrentRef] = useState(0);

  useEffect(() => {
    const sectionRefs = [aboutRef, teachRef, serviceRef, pubRef, contactRef];
    const headerOffset = 96;

    const updateCurrentSection = () => {
      let activeIndex = 0;

      sectionRefs.forEach((sectionRef, index) => {
        const section = sectionRef.current;
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top - headerOffset <= 0) {
          activeIndex = index;
        }
      });

      SetCurrentRef(activeIndex);
    };

    updateCurrentSection();
    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);

    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
  }, []);

  const ChangeCurrentRef = useCallback(() => {}, []);

  return (
    <>
      <Header aboutRef={aboutRef} teachRef={teachRef} pubRef={pubRef} serviceRef={serviceRef} contactRef={contactRef} currentRef={CurrentRef}/>

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
          <title>Pedro Acevedo Portfolio</title>
        </Head>

        <MainSection key={0} sectionId={0} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={aboutRef}>
            <About />

            <main className={styles.main}>
              <h5 className={styles.subsectionTitle}>News</h5>

              <hr className={styles.separationLine}></hr>

              <NewsList initialVisibleCount={4} />
            </main>
          </main>
        </MainSection>

        <MainSection key={1} sectionId={1} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={teachRef}>
            <h5 className={styles.subsectionTitle}>Teaching</h5>

            <hr className={styles.separationLine}></hr>

            <ItemList items={MetaData.teaching} />
          </main>
        </MainSection>

        <MainSection key={2} sectionId={2} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={serviceRef}>
            <h5 className={styles.subsectionTitle}>Services</h5>

            <hr className={styles.separationLine}></hr>

            <ItemList items={MetaData.services} />
          </main>
        </MainSection>

        <MainSection key={3} sectionId={3} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={pubRef}>
            <h5 className={styles.subsectionTitle}>Publications</h5>

            <hr className={styles.separationLine}></hr>

            <PublicationList />
          </main>
        </MainSection>

        {/* <MainSection key={2} sectionId={2} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={expRef}>

            <h5 className={styles.subsectionTitle}>
              Experience
            </h5>

            <hr className={styles.separationLine}></hr>

            <ExperienceList />
          </main>
        </MainSection> */}

        {/* <MainSection key={3} sectionId={3} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={proRef}>

            <h5 className={styles.subsectionTitle}>
              Personal Projects
            </h5>

            <hr className={styles.separationLine}></hr>

            <ProjectList />

          </main>
        </MainSection> */}

        <MainSection key={4} sectionId={4} onIntersecting={ChangeCurrentRef}>
          <main className={styles.main} ref={contactRef}>
            <h5 className={styles.subsectionTitle}>Contact</h5>

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
              <Image
                src="/github-logo.png"
                alt="Github Logo"
                width={32}
                height={32}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
