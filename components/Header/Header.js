import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from "next/image";
import styled from "styled-components";
import HeaderStyles from "./Header.styles";

const Button = styled.a`${HeaderStyles.button}`;
const Logo = styled.span`${HeaderStyles.logo}`;
const Option = styled.li`${HeaderStyles.option}`;
const Navigation = styled.ul`${HeaderStyles.navigation}`;
const Wrapper = styled.div`${HeaderStyles.wrapper}`;
const Bars = styled(FaBars)`${HeaderStyles.bars}`;
const MobileMenu = styled.ul`${HeaderStyles.MobileMenu}`;
const MobileOption = styled.li`${HeaderStyles.MobileOption}`;


const Header = ({ aboutRef, pubRef, projectsRef, experienceRef, contactRef, currentRef}) => {

    const ScrollToSection = (ref) => {
        if (isOpen) {
            setIsOpen(false);
        }
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const [isOpen, setIsOpen] = useState(false);

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const isCurrent = (option) => currentRef === option;


    return (
        <Wrapper>
            <Logo>
                <h2>Pedro Acevedo</h2>
            </Logo>
            <Bars onClick={() => handleClick()} isOpen={isOpen} />
            <Navigation>
                <Option onClick={() => ScrollToSection(aboutRef)} isCurrent={isCurrent(0)}> About </Option>
                <Option onClick={() => ScrollToSection(pubRef)} isCurrent={isCurrent(1)}> Publications </Option>
                <Option onClick={() => ScrollToSection(experienceRef)} isCurrent={isCurrent(2)}> Experience </Option>
                <Option onClick={() => ScrollToSection(projectsRef)} isCurrent={isCurrent(3)}> Personal Projects </Option>
                <Option onClick={() => ScrollToSection(contactRef)} isCurrent={isCurrent(4)}> Contact </Option>
                <Option className="nav-li">
                    <Button target="_blank" href="https://drive.google.com/file/d/1Ml695q_jysrDsan-RKkAJ4c4pXx_X-2O/view?usp=sharing" rel="noreferrer">
                        Resume
                    </Button>
                </Option>
            </Navigation>
            <MobileMenu isOpen={isOpen}>
                <MobileOption onClick={() => ScrollToSection(aboutRef)} isCurrent={isCurrent(0)}>About</MobileOption>
                <MobileOption onClick={() => ScrollToSection(pubRef)} isCurrent={isCurrent(1)}>Publications</MobileOption>
                <MobileOption onClick={() => ScrollToSection(experienceRef)} isCurrent={isCurrent(2)}>Experience</MobileOption>
                <MobileOption onClick={() => ScrollToSection(projectsRef)} isCurrent={isCurrent(3)}>Personal Projects</MobileOption>
                <MobileOption onClick={() => ScrollToSection(contactRef)} isCurrent={isCurrent(4)}>Contact</MobileOption>
                <MobileOption>
                    <Button
                        target="_blank"
                        href="https://drive.google.com/file/d/1MKXesT8kStySRcjrvOq_-flfhWdNXbji/view?usp=sharing"
                        rel="noreferrer"
                    >
                        Resume
                    </Button>
                </MobileOption>
            </MobileMenu>
        </Wrapper>
    );
}

export default Header;