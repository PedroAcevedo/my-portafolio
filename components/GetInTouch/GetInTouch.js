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
            Currently, I am looking for collaborators! My inbox is open! Thanks for your interest.
            </Description>
            <Button href="mailto:pedrodavidacevedo@live.com" rel="noopener noreferrer" target="_blank"> Send an Email </Button>
        </Wrapper>
    );
}

export default GetInTouch;