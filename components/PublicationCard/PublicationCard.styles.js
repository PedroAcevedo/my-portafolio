import { css } from 'styled-components';

const PublicationCardStyles = {
  wrapper: css`
    margin: 1rem 0 ;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    `,
  row: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0px;
      margin: 0px;
    }
    `,
  col: css`
    flex: content;
    padding-left: 12px;
    padding-right: 12px;
    max-width: 80%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-size: 0.8em;
    }
    `,
  url: css`
   width:100%;
   margin-right: 0.5rem;
   padding: 0.25rem 0.75rem;
   text-align: center;
   color: #D2D4C8;
   display: inline;
   background-color: transparent;
   border: 1px solid #D2D4C8;
   Border-radius: 12px;
   text-decoration: none;
   &:hover{
    color: #3E5C76;
    border-color: #3E5C76;
   }
  `,
  title: css`
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  `,
  thumbnail: css`
    width: 510px;
    @media screen and (max-width: 768px) {
      width: 340px;
    }
  `,
};

export default PublicationCardStyles;
