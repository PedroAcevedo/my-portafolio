import GetInTouchStyles from './GetInTouch.styles';
import styled from "styled-components";

const Wrapper = styled.div`${GetInTouchStyles.wrapper}`;
const Title = styled.h1`${GetInTouchStyles.title}`;
const Description = styled.p`${GetInTouchStyles.description}`;
const Button = styled.a`${GetInTouchStyles.button}`;

const GetInTouch = () => {
    return (
        <Wrapper>
            <Title>Get In Touch</Title>
            <Description>
            Currently, I am looking for full-time position for 2025. My inbox is open! Thanks for your interest.
            </Description>
            <Button href="mailto:paceved@purdue.edu" rel="noopener noreferrer" target="_blank"> Send an Email </Button>
        </Wrapper>
    );
}

export default GetInTouch;