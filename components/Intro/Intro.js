import IntroStyles from './Intro.styles';
import styled from "styled-components";
import Social from "./Social/Social";

const Wrapper = styled.div`${IntroStyles.wrapper}`;
const LabelColor = styled.p`${IntroStyles.labelColor}`;
const Title = styled.h1`${IntroStyles.title}`;
const Description = styled.p`${IntroStyles.description}`;


const Intro = () => {
    return (
        <>
        <Wrapper>
            <LabelColor>Hi, my name is...</LabelColor>
            <Title>Pedro David Acevedo.</Title>
            <Title alternative>PhD student 💻</Title>
            <Description>
                I am studying at Purdue University. I consider
                myself a careful person, able to appropriate
                knowledge quickly, with great adaptability to
                different environments. Welcome to my webpage.
            </Description>
        </Wrapper>
        <Social></Social>
        </>
    );
}

export default Intro;