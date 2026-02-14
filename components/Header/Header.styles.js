import { css } from 'styled-components';

const MOBILE_BREAKPOINT = "1024px";

const HeaderStyles = {
  wrapper: css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-bottom: 4mm ridge rgba(62,92,118, .8);
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background-color: #11151c;
      min-height: var(--header-height);
      padding: 0.5rem 1rem;
      
      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
        justify-content: space-between;
        min-height: 4.25rem;
      }
    `,
  logo: css`
      cursor: pointer;
      margin-right: 1rem;
      h2 {
        margin: 0;
        font-size: clamp(1.1rem, 3.4vw, 1.5rem);
      }
      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
        margin: 0;
      }
    `,
  navigation: css`
      margin: 0;
      padding: 20px;
      overflow: hidden;
      list-style: none;
      @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
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
    margin-left: 0.5rem;

    &:hover{
      color: #D2D4C8;
      border-color: #D2D4C8;
    }
  `,
  bars: css`
    display: none;
    color: #E8EDDF;
    @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
      display: block;
      position: absolute;
      top: 0.95rem;
      right: 1rem;
      transform: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  `,

    MobileMenu : ({ isOpen}) => css`
    position: fixed;
    top: 0;
    right: ${(isOpen ? "0" : "-100%")};
    width: min(340px, 85vw);
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
    font-size: 1.05rem;
    `
};

export default HeaderStyles;
