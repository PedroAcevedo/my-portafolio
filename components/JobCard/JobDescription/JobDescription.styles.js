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
    `,
    bullet: css`
        max-width: 20px;
        min-width: 20px;
        padding: 5px;
        margin-right: 5px;
    `,
    label: css`
        line-height: 1.5;
    `,
};

export default JobDescriptionStyles;
