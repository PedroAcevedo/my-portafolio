import { css } from 'styled-components';

const AboutStyles = {
    wrapper: css`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    `,
    row: css`
    display: flex;
    position: relative;
    height: auto;
    zoom: 1;
    align-items: center;
    padding: 1.5rem;
    margin: 0px 20%;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0px;
        margin: 0px;
    }
    `,
    col: css`
    flex: content;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 40%;
    font-size: 1.2em;
    @media screen and (max-width: 768px) {
        min-width: 80%;
        font-size: 1em;
        padding: 0;
    }
    `,
    photo: css`
        border-radius: 10px;
    `,
    profile: ({ background }) => css`
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 5%;
        &:hover {
            margin: 5%;
            border-color: ${background};

        }
    `,
};

export default AboutStyles;
