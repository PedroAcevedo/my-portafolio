import { css } from 'styled-components';

const SocialStyles = {
  wrapper: css`
    width: min(760px, 100%);
    margin-top: 0.75rem;
  `,
  socialList: css`
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 0.35rem;
    width: 100%;
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.3rem;
    }
  `,
  media: css`
   width: 100%;
   height: clamp(38px, 4.2vw, 46px);
   display: grid;
   place-items: center;
   background: var(--color-text-title);
   text-align: center;
   color: var(--color-accent);
   border-radius: 8px;

   &:nth-child(odd) {
    background: var(--color-accent);
    color: var(--color-text-title);
   }

   &:hover{
    background: var(--color-accent);
    color: var(--color-text-title);
    &:nth-child(odd) {
      background: var(--color-text-title);
      color: var(--color-accent);
     }
   }
  `,
  link: css`
    font-size: clamp(1.05rem, 1.8vw, 1.25rem);
    line-height: 1;
  `,

};

export default SocialStyles;

