import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Image from "next/image";
import BackToTopButtonStyles from './BackToTopButton.styles';

const Wrapper = styled.a`${BackToTopButtonStyles.wrapper}`;
const Arrow = styled.div`${BackToTopButtonStyles.arrow}`;

const BackToTopButton = () => {

    const [isVisible, setIsVisible] = useState(true);

    const listenToScroll = () => {
        let heightToShow = 800;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll < heightToShow) {
            isVisible &&
                setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        setIsVisible(false);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const BackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {
                isVisible &&
                <Wrapper onClick={BackToTop}>
                    <Arrow>
                        <Image src="/up-arrow-svgrepo-com.svg" alt="Github Logo" width={60} height={60} />
                    </Arrow>
                </Wrapper>
            }
        </>
    );
}

export default BackToTopButton;