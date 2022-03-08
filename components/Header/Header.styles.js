import { css } from 'styled-components';

const HeaderStyles = {
  wrapper: css`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `,
  logo: css`
      height: 1em;
      margin-left: 0.5rem;
      padding-top: 5px;
      margin: 0;
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
  option: ({ className }) => css`
    display: inline;
    cursor: pointer;
    padding: 0.75rem 1rem;

    &:hover ${className} {
      background-color: #3C6E71;
    }
   `,
  button: ({ className }) => css`
    display: inline;
    color: #E8EDDF;
    background-color: transparent;
    border: 1px solid #E8EDDF;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    margin-left: 15px;
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
      font-size: 1.8rem;
      cursor: pointer;
    }
  `,
};

export default HeaderStyles;
