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
    height: auto;
    zoom: 1;
    align-items: center;
    margin: 0px 20%;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 0px;
        margin: 0px;
    }
    `,
    col: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 40%;
    font-size: 1.1em;
    @media screen and (max-width: 768px) {
        min-width: 80%;
        font-size: 1em;
        padding: 0;
    }
    `,
    colLeft:css`
      align-items: flex-start;
      justify-content: left;
    `,
    photo: css`
        object-fit: contain;
    `,
    profile: ({ background, size }) => css`
        border: 1px solid #eaeaea;
        border-radius: 10px;
        width: ${size}px;
        height: ${size}px;
        padding: 5%;
        &:hover {
            border-color: ${background};

        }
    `,
    link:css`
        color: #3E5C76;
    `,
};

export default AboutStyles;
