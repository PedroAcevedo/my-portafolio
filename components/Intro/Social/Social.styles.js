import { css } from 'styled-components';

const SocialStyles = {
  wrapper: css`
    width: 60%;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    `,
  infiniteDiv: css`
    display: flex;
    width: 200%;
    animation: bannermove 20s linear infinite;

    @media screen and (max-width: 768px) {
      width: 200%;
    }


    @keyframes "bannermove" {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @media screen and (max-width: 768px) {
      animation: bannermobile 20s linear infinite;

      @keyframes "bannermobile" {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    }

    
   `,
  controlDiv: css`
   width: 100%;
   @media screen and (max-width: 768px) {
    width: 100%;
  }
  `,
  socialList: css`
    display: flex;
    list-style-type: none; 
    padding: 0;
    margin: 0;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
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
   @media screen and (max-width: 768px) {
    width: 100%;
   }
  `,
  link: css`
  width: 60%;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1em; 
    width: 60%;
  }
 `,

};

export default SocialStyles;
