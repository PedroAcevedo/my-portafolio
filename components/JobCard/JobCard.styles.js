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
    `,
  col: css`
    flex: content;
    padding-left: 12px;
    padding-right: 12px;
    max-width: 50%;
    `,
};

export default JobCardStyles;
