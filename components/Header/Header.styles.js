import { css } from 'styled-components';

const HeaderStyles = {
  wrapper: css`
      display: flex;
      justify-content: space-between;
      border-bottom: 4mm ridge rgba(62,92,118, .8);;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: #11151c;
      
      @media screen and (max-width: 768px) {
        padding-top: 15%;
      }
    `,
  logo: css`
      height: 1em;
      margin-left: 0.5rem;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50%, -10%);
      }
    `,
  navigation: css`
      margin: 0;
      padding: 20px;  
      overflow: hidden;
      list-style: none;
      @media screen and (max-width: 768px) {
        display: none;
      }
    `,
  option: ({ className, isCurrent}) => css`
    display: inline;
    cursor: pointer;
    padding: 0.75rem 1rem;

    ${isCurrent && `
      background-color: #3E5C76;
    `}

    &:hover ${className} {
      background-color: #3E5C76;
    }
   `,
  button: css`
    display: inline;
    color: #aed7fb;
    background-color: transparent;
    border: 1px solid #aed7fb;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    margin-left: 15px;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
  `,
  bars: css`
    display: none;
    color: #E8EDDF;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.5rem;
      cursor: pointer;
    }
  `,

    MobileMenu : ({ isOpen}) => css`
    position: fixed;
    top: 0;
    right: ${(isOpen ? "0" : "-100%")};
    width: 75%;
    height: 100%;
    background-color: #11151c;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 1000;
    `,
    MobileOption : css`
    margin: 1rem 0;
    cursor: pointer;
    list-style: none;
    margin-top: 35px;
    `
};

export default HeaderStyles;
