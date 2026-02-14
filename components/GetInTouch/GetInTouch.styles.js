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
    color: #E8EDDF;
  `,
  title: css`
    font-size: clamp(2rem, 7vw, 4rem);
    margin-bottom: 0.75rem;
    line-height: 1.15;
    text-align: center;
    color: #F0EBD8;
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
    color: #aed7fb;
    background-color: transparent;
    border: 1px solid #aed7fb;
    border-radius: 12px;
    padding: 0.95rem 1.25rem;
    line-height: 1;
    text-decoration: none;
    margin-top: 0.75rem;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
  `,
};

export default GetInTouchStyles;
