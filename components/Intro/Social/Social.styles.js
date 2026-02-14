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
   background: #F0EBD8;
   text-align: center;
   color: #3E5C76;
   border-radius: 8px;

   &:nth-child(odd) {
    background: #3E5C76;
    color: #F0EBD8;
   }

   &:hover{
    background: #3E5C76;
    color: #F0EBD8;
    &:nth-child(odd) {
      background: #F0EBD8;
      color: #3E5C76;
     }
   }
  `,
  link: css`
    font-size: clamp(1.05rem, 1.8vw, 1.25rem);
    line-height: 1;
  `,

};

export default SocialStyles;
