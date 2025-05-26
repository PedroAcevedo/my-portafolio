import { css, keyframes } from 'styled-components';

const shadowDance = keyframes`
    0%, 100% {
        text-shadow: 2px 2px 0 #ff005e, 4px 4px 0 #00d4ff;
    }
    50% {
        text-shadow: -2px -2px 0 #00d4ff, -4px -4px 0 #ff005e;
    }
`

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
    shadowDanceText: css`
        font-weight: bold;
        text-shadow: 2px 2px 0 #ff005e, 4px 4px 0 #00d4ff;
        animation: ${shadowDance} 2s infinite;
    `,
};



export default AboutStyles;
