import { css } from 'styled-components';

const AboutStyles = {
    wrapper: css`
    text-align: left;
    color: inherit;
    text-decoration: none;
    @media screen and (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;
    }
    `,
    row: css`
    display: flex;
    height: auto;
    zoom: 1;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0px;
        margin: 0px;
    }
    `,
    col: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 20%;
    font-size: 1.1em;
    @media screen and (max-width: 768px) {
        min-width: 90%;
        align-items: flex-start;
        font-size: 1em;
        padding: 0;
    }
    `,
    colLeft: css`
      align-items: flex-start;
      justify-content: center;
      max-width: 65%;
      margin-right: 0;
    `,
    textItem: css`
        margin: 5px 0;
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
    link: css`
        color: #aed7fb;
    `,
    line: css`
        color: white;
        width: 100%;
    `,
};



export default AboutStyles;
