import { css } from 'styled-components';

const BackToTopButtonStyles = {
    wrapper: css`
    transition: .2s;
    position: fixed;
    bottom: 1.2rem;
    right: 1.2rem;
    z-index: 15;
    color: #D2D4C8;
    background-color: black;
    border: 1px solid #D2D4C8;
    border-radius: 12px;
    padding: 0.55rem;
    display: grid;
    place-items: center;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
    `,
    arrow: css`
    width: 20px;
    height: 20px;
    `,
};

export default BackToTopButtonStyles;
