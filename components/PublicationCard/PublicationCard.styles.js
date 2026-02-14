import { css } from 'styled-components';

const PublicationCardStyles = {
  wrapper: css`
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border-radius: 10px;
    box-sizing: border-box;
    transition: color 0.15s ease, border-color 0.15s ease;
  `,
  row: css`
    display: grid;
    grid-template-columns: minmax(220px, 34%) 1fr;
    gap: 1rem;
    align-items: start;
    width: 100%;
    min-width: 0;
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  col: css`
    min-width: 0;
    padding: 0 0.25rem;
    p {
      margin: 0.35rem 0;
      line-height: 1.55;
      overflow-wrap: anywhere;
      word-break: normal;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.95rem;
    }
  `,
  linkRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  `,
  url: css`
   display: inline-flex;
   align-items: center;
   gap: 0.35rem;
   width: auto;
   margin-right: 0;
   padding: 0.3rem 0.75rem;
   text-align: center;
   color: #D2D4C8;
   background-color: transparent;
   border: 1px solid #D2D4C8;
   border-radius: 12px;
   white-space: nowrap;
   text-decoration: none;
   &:hover {
    color: #3E5C76;
    border-color: #3E5C76;
   }
   @media screen and (max-width: 420px) {
    font-size: 0.9rem;
   }
  `,
  title: css`
    font-size: clamp(1.05rem, 2.2vw, 1.5rem);
    font-weight: bold;
    line-height: 1.35;
    overflow-wrap: anywhere;
  `,
  thumbnail: css`
    width: 100%;
    max-width: 460px;
    height: auto;
    object-fit: cover;
    justify-self: start;
    @media screen and (max-width: 900px) {
      max-width: 100%;
    }
  `,
};

export default PublicationCardStyles;
