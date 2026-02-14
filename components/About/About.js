import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import AboutStyles from "./About.styles";
import Social from "../Intro/Social/Social";
import { cycleTheme, loadSavedTheme, themes } from "../../utils/themePalette";

const Column = styled.div`${AboutStyles.col}`;
const ColumnText = styled(Column)`${AboutStyles.colLeft}`;
const Row = styled.div`${AboutStyles.row}`;
const Wrapper = styled.div`${AboutStyles.wrapper}`;
const Profile = styled.div`${AboutStyles.profile}`;
const Photo = styled(Image)`${AboutStyles.photo}`;
const Link = styled.a`${AboutStyles.link}`;
const Line = styled.hr`${AboutStyles.line}`;
const PText = styled.p`${AboutStyles.textItem}`;
const H1Text = styled.h1`${AboutStyles.textItem}`;
const ShadowText = styled.span`${AboutStyles.shadowDanceText}`;

const About = () => {
  const profileSize = 300;

  useEffect(() => {
    loadSavedTheme();
  }, []);

  const handleProfileKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      cycleTheme();
    }
  };

  return (
    <Wrapper>
      <Row>
        <Column>
          <Profile
            background=""
            size={profileSize}
            onClick={cycleTheme}
            onKeyDown={handleProfileKeyDown}
            role="button"
            tabIndex={0}
            title={`Easter egg: click to switch color theme (${themes.length} themes)`}
            aria-label="Switch website color theme"
          >
            <Photo src="/me.jpg" alt="Me" width={profileSize} height={profileSize} />
          </Profile>
        </Column>
        <ColumnText>
          <H1Text>Pedro Acevedo</H1Text>
          <PText>
            <ShadowText>New Position</ShadowText> Assistant Professor,{" "}
            <Link href="https://uncw.edu/" target="_blank" rel="noopener noreferrer">
              University of North Carolina Wilmington (UNCW)
            </Link>
            , Fall 2025
          </PText>
          <PText>
            Ph.D in Technology,{" "}
            <Link href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">
              Purdue University
            </Link>
            , 2021-2025
          </PText>
          <Line></Line>
          <PText>
            I am an Assistant Professor in the Computer Science Department at the University of
            North Carolina Wilmington (UNCW). My research interests include Virtual Reality (VR),
            Educational Technology, Human-Computer Interaction (HCI), Games, Procedural Content
            Generation, and AI-driven Virtual Agents. During my Ph.D. in the Virtual Reality Lab
            within the Computer Graphics Technology Department at Purdue University, I worked as a
            Unity Developer at the{" "}
            <Link
              href="https://www.ecshowcase.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Envision Center
            </Link>{" "}
            (2023-2025), where I developed educational interactive experiences for both desktop
            and VR platforms. Prior to that, I spent two years as a Research Assistant under the
            supervision of{" "}
            <Link
              href="https://web.ics.purdue.edu/~cmousas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Christos Mousas
            </Link>
            . I hold both a Master’s and a Bachelor’s degree in Software Engineering from
            Universidad del Norte in Colombia.
          </PText>
          <Social></Social>
        </ColumnText>
      </Row>
    </Wrapper>
  );
};

export default About;
