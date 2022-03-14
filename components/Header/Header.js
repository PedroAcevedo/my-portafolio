import { FaBars } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HeaderStyles from "./Header.styles";

const Button = styled.a`${HeaderStyles.button}`;
const Logo = styled.span`${HeaderStyles.logo}`;
const Option = styled.li`${HeaderStyles.option}`;
const Navigation = styled.ul`${HeaderStyles.navigation}`;
const Wrapper = styled.div`${HeaderStyles.wrapper}`;
const Bars = styled(FaBars)`${HeaderStyles.bars}`;


const Header = ({ aboutRef, experienceRef, contactRef }) => {

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
                <Option onClick={() => ScrollToSection(aboutRef)}> About </Option>
                <Option onClick={() => ScrollToSection(experienceRef)}> Experience </Option>
                <Option onClick={() => ScrollToSection(contactRef)}> Contact </Option>
                <Option className="nav-li">
                    <Link href="https://drive.google.com/uc?export=download&id=12TZgyKvcNGWt-GgK_ArZ9itu2l_ibgWv" passHref>
                        <Button className="resume-btn"> Resume </Button>
                    </Link>
                </Option>
            </Navigation>
        </Wrapper>
    );
}

export default Header;