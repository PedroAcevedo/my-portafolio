import { css } from 'styled-components';

const SocialStyles = {
  wrapper: css`
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    `,
  socialList: css`
    display: flex;
    list-style-type: none; 
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
   `,
  media: css`
   width:10%;
   background: #F0EBD8;
   padding: 0.5%;
   text-align: center;
   color: #3E5C76;

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

   @media screen and (max-width: 768px) {
    width: 100%;
   }
  `,
  link: css`
    font-size: 1.25em;
  @media screen and (max-width: 768px) {
    font-size: 1em; 
    width: 60%;
  }
 `,

};

export default SocialStyles;
