import { css } from 'styled-components';

const BackToTopButtonStyles = {
    wrapper: css`
    transition: .2s;
    position: fixed;
    bottom: 1.2rem;
    right: 1.2rem;
    z-index: 15;
    color: var(--color-text-base);
    background-color: var(--color-black);
    border: 1px solid var(--color-text-base);
    border-radius: 12px;
    padding: 0.55rem;
    display: grid;
    place-items: center;

    &:hover{
      color: var(--color-text-base);
      border-color: var(--color-text-base);
    }
    `,
    arrow: css`
    width: 20px;
    height: 20px;
    `,
};

export default BackToTopButtonStyles;

