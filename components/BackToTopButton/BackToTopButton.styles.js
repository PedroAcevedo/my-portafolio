import { css } from 'styled-components';

const BackToTopButtonStyles = {
    wrapper: css`
    position: fixed;
    transition: .2s;
    position: fixed;
    bottom: 1.2rem;
    right: 1.5rem;
    z-index: 15;
    color: #D2D4C8;
    background-color: black;
    border: 1px solid #D2D4C8;
    border-radius: 12px;
    padding: 15px;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
    `,
    arrow: css`
    fill: #3E5C76;
    width: 20px;
    min-width: 20px;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
    `,
};

export default BackToTopButtonStyles;