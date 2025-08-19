import { css } from 'styled-components';

const ItemListStyles = {
    wrapper: css`
    text-align: left;
    margin-top: 2%;
    color: inherit;
    text-decoration: none;
    border-collapse: separate;
    border-spacing: 0 10px; /* 10px vertical spacing between rows */
    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0px;
        margin: 0px;
     }
    `,
    category: css`
        font-weight: bold;
    `,
    column: css`
        padding-right: 2%;
        word-wrap: break-word;
        overflow-wrap: break-word;
    `,
};

export default ItemListStyles;