import { css } from 'styled-components';

const GetInTouchStyles = {
  wrapper: css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 2rem 0;
  `,
  labelColor: css`
    font-size: 1em;
    color: var(--color-text-strong);
  `,
  title: css`
    font-size: clamp(2rem, 7vw, 4rem);
    margin-bottom: 0.75rem;
    line-height: 1.15;
    text-align: center;
    color: var(--color-text-title);
  `,
  description: css`
    font-size: clamp(1rem, 2.2vw, 1.2rem);
    margin: 1rem 0;
    width: min(760px, 100%);
    text-align: center;
    line-height: 1.6;
    overflow-wrap: anywhere;
  `,
  button: css`
    display: inline-block;
    color: var(--color-accent-soft);
    background-color: transparent;
    border: 1px solid var(--color-accent-soft);
    border-radius: 12px;
    padding: 0.95rem 1.25rem;
    line-height: 1;
    text-decoration: none;
    margin-top: 0.75rem;

    &:hover{
      color: var(--color-text-base);
      border-color: var(--color-text-base);
    }
  `,
};

export default GetInTouchStyles;

