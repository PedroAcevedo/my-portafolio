import { css } from 'styled-components';

const ItemListStyles = {
  wrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    text-align: left;
    margin-top: 1rem;
    color: inherit;
    text-decoration: none;
  `,
  row: css`
    display: grid;
    grid-template-columns: minmax(140px, 240px) 1fr;
    gap: 0.5rem 1rem;
    align-items: start;
    width: 100%;
    min-width: 0;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0.15rem;
    }
  `,
  category: css`
    font-weight: bold;
    color: var(--color-text-title);
  `,
  column: css`
    min-width: 0;
    overflow-wrap: anywhere;
    line-height: 1.55;
  `,
};

export default ItemListStyles;

