import { css } from 'styled-components';

const SocialStyles = {
  wrapper: css`
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    `,
  infiniteDiv: css`
    display: flex;
    width: 200%;
    animation: bannermove 20s linear infinite;

    @keyframes "bannermove" {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
   `,
  controlDiv: css`
   width: 100%;
  `,
  socialList: css`
    display: flex;
    list-style-type: none; 
    padding: 0;
    margin: 0;
   `,
  media: css`
   width:100%;
   background: #F0EBD8;
   padding: 1rem;
   text-align: center;
   color: #3E5C76;
   &:nth-child(2) {
    background: #3E5C76;
    color: #F0EBD8;
   }
  `,
  link: css`
  width: 60%;
  padding: 1rem;
 `,

};

export default SocialStyles;
