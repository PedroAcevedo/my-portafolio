import { css } from "styled-components";

const NewsListStyles = {
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
    grid-template-columns: minmax(120px, 180px) 1fr;
    gap: 0.4rem 1rem;
    align-items: start;
    width: 100%;
    min-width: 0;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }
  `,
  date: css`
    font-weight: bold;
    color: var(--color-text-title);
  `,
  text: css`
    min-width: 0;
    overflow-wrap: anywhere;
    line-height: 1.55;
  `,
  link: css`
    color: var(--color-accent-soft);
    text-decoration: underline;
    text-underline-offset: 2px;
  `,
  controls: css`
    margin-top: 0.35rem;
  `,
  button: css`
    display: inline-block;
    color: var(--color-accent-soft);
    background-color: transparent;
    border: 1px solid var(--color-accent-soft);
    border-radius: 12px;
    padding: 0.55rem 0.9rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--color-text-base);
      border-color: var(--color-text-base);
    }
  `,
};

export default NewsListStyles;

