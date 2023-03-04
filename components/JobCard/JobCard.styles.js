import { css } from 'styled-components';

const JobCardStyles = {
  wrapper: css`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    `,
  row: css`
    display: flex;
    position: relative;
    height: auto;
    zoom: 1;
    margin-left: -12px;
    margin-right: -12px;
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
    max-width: 50%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      padding: 0px;
      margin: 0px;
   }

    `,
};

export default JobCardStyles;
