import { css } from 'styled-components';

const IntroStyles = {
    wrapper: css`
        display: flex;
        align-items: left;
        flex-direction: column;
        padding: 0 20%;
        margin-bottom: 10%;
    `,
    labelColor: css`
        font-size: 1em;
        color: #E8EDDF;
    `,
    title: ({alternative}) => css`
        font-size: 1em; 
        margin: 0;
        line-height: 1.15;
        text-align: left;
        font-size: 4rem;
        color: ${alternative ? '#3E5C76' : '#F0EBD8'};
    `,
    description: css`
        font-size: 1.2em;
        width: 50%;
    `,
};

export default IntroStyles;
