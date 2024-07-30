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


const Header = ({ pubRef, projectsRef, experienceRef, contactRef }) => {

    const ScrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Wrapper>
            <Logo>
                <Image src="/PD.svg" alt="Github Logo" width={60} height={60} />
            </Logo>
            <Bars />
            <Navigation>
                <Option onClick={() => ScrollToSection(pubRef)}> Publications </Option>
                <Option onClick={() => ScrollToSection(projectsRef)}> Personal Projects </Option>
                <Option onClick={() => ScrollToSection(experienceRef)}> Experience </Option>
                <Option onClick={() => ScrollToSection(contactRef)}> Contact </Option>
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