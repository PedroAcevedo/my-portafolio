import { css } from 'styled-components';

const JobDescriptionStyles = {
    title: css`
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: bold;
    `,
    itemList: css`
        margin: 0;
        padding: 0;
        overflow: hidden;
        list-style: none;
    `,
    item: css`
        display: flex;
        margin: 10px 0px;
        padding-left: 20px;
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
        line-height: 1.5;
    `,
};

export default JobDescriptionStyles;
