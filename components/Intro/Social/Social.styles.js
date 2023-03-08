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
    flex-direction: column;
    align-content: space-around;
    flex-wrap: nowrap;

    @media screen and (max-width: 768px) {
      width: 100%;
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

   &:hover{
    background: #3E5C76;
    color: #F0EBD8;
    &:nth-child(2) {
      background: #F0EBD8;
      color: #3E5C76;
     }
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
