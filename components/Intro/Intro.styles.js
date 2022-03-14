import { css } from 'styled-components';

const IntroStyles = {
    wrapper: css`
        display: flex;
        align-items: left;
        flex-direction: column;
        padding: 0 20%;
        margin-bottom: 10%;
        @media screen and (max-width: 768px) {
            padding: 0;
        }
    `,
    labelColor: css`
        font-size: 1em;
        color: #E8EDDF;
    `,
    title: ({alternative}) => css`
        font-size: 4rem;
        margin: 0;
        line-height: 1.15;
        text-align: left;
        color: ${alternative ? '#3E5C76' : '#F0EBD8'};

        @media screen and (max-width: 768px) {
            font-size: 2em; 
        }
    `,
    description: css`
        font-size: 1.2em;
        width: 50%;
        @media screen and (max-width: 768px) {
            font-size: 1em; 
            min-width: 80%;
        }
    `,
};

export default IntroStyles;
