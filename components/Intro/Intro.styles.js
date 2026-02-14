import { css } from 'styled-components';

const IntroStyles = {
    wrapper: css`
        display: flex;
        align-items: left;
        flex-direction: column;
        padding: 0 20%;
        @media screen and (max-width: 768px) {
            padding: 0;
        }
    `,
    labelColor: css`
        font-size: 1em;
        color: var(--color-text-strong);
    `,
    title: ({alternative}) => css`
        font-size: 4rem;
        margin: 0;
        line-height: 1.15;
        text-align: left;
        color: ${alternative ? "var(--color-accent)" : "var(--color-text-title)"};

        @media screen and (max-width: 768px) {
            font-size: 2em; 
        }
    `,
    description: css`
        font-size: 1.2em;
        width: 60%;
        @media screen and (max-width: 768px) {
            font-size: 1em; 
            min-width: 80%;
        }
    `,
};

export default IntroStyles;

