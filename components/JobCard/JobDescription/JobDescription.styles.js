import { css } from 'styled-components';

const JobDescriptionStyles = {
    title: css`
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    `,
    itemList: css`
        list-style: none;
        margin: 0;
        padding: 0;
    `,
    item: css`
        display: flex;
        margin: 0px;
        padding-left: 20px;
        padding-bottom: 20px;
        font-size: 1.1rem;
    `,
    bullet: css`
        position: absolute;
        margin-left: -20px;
        min-height: 10px;
        max-height: 10px;
        max-width: 10px;
        min-width: 10px;
    `,
    label: css`
        padding: 0;
    `,
    year: css`
        font-size: 0.8rem;
        padding: 0 20px;
    `,
};

export default JobDescriptionStyles;
