import { FaBars } from 'react-icons/fa';
import Image from "next/image";
import styled from "styled-components";
import HeaderStyles from "./Header.styles";

const Button = styled.a`${HeaderStyles.button}`;
const Logo = styled.span`${HeaderStyles.logo}`;
const Option = styled.li`${HeaderStyles.option}`;
const Navigation = styled.ul`${HeaderStyles.navigation}`;
const Wrapper = styled.div`${HeaderStyles.wrapper}`;
const Bars = styled(FaBars)`${HeaderStyles.bars}`;


const Header = ({ aboutRef, pubRef, projectsRef, experienceRef, contactRef, currentRef}) => {

    const ScrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const isCurrent = (option) => currentRef === option;


    return (
        <Wrapper>
            <Logo>
                <Image src="/PD.svg" alt="Github Logo" width={60} height={60} />
            </Logo>
            <Bars />
            <Navigation>
                <Option onClick={() => ScrollToSection(aboutRef)} isCurrent={isCurrent(0)}> About </Option>
                <Option onClick={() => ScrollToSection(pubRef)} isCurrent={isCurrent(1)}> Publications </Option>
                <Option onClick={() => ScrollToSection(experienceRef)} isCurrent={isCurrent(2)}> Experience </Option>
                <Option onClick={() => ScrollToSection(projectsRef)} isCurrent={isCurrent(3)}> Personal Projects </Option>
                <Option onClick={() => ScrollToSection(contactRef)} isCurrent={isCurrent(4)}> Contact </Option>
                <Option className="nav-li">
                    <Button target="_blank" href="https://drive.google.com/file/d/1MKXesT8kStySRcjrvOq_-flfhWdNXbji/view?usp=sharing" rel="noreferrer">
                        Resume
                    </Button>
                </Option>
            </Navigation>
        </Wrapper>
    );
}

export default Header;