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
    `,
    col: css`
    flex: content;
    padding-left: 12px;
    padding-right: 12px;
    min-width: 40%;
    font-size: 1.2em;
    `,
    photo: ({ background }) => css`
        border-radius: 10px;
        background-color: ${background};
        &:hover {
            background-color: ${background};
        }
    `,
    profile: css`
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 5%;
        &:hover {
            margin: 5%;
        }
    `,
};

export default AboutStyles;
