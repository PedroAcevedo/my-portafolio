import { css } from 'styled-components';

const GetInTouchStyles = {
    wrapper: css`
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 20%;
        margin: 5% 0px;
        @media screen and (max-width: 768px) {
            padding: 0;
        }
    `,
    labelColor: css`
        font-size: 1em;
        color: #E8EDDF;
    `,
    title: css`
        font-size: 4em;
        margin-bottom: 3%;
        line-height: 1.15;
        text-align: left;
        color: #F0EBD8;

        @media screen and (max-width: 768px) {
            font-size: 2em; 
        }
    `,
    description: css`
        font-size: 1.2em;
        margin: 3% 0;
        width: 50%;
        text-align: center;
        @media screen and (max-width: 768px) {
            font-size: 1em; 
            min-width: 80%;
        }
    `,
    button: css`
        display: inline;
        color: #aed7fb;
        background-color: transparent;
        border: 1px solid #aed7fb;
        border-radius: 12px;
        padding: 1.3rem;
        line-height: 1;
        text-decoration: none;
        margin: 3% 0;

        &:hover{
        color: #D2D4C8;
        border-color: #D2D4C8;
        }
    `,
};

export default GetInTouchStyles;
