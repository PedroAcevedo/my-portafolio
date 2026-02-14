import { css } from 'styled-components';

const PublicationListStyles = {
  wrapper: css`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    overflow-x: hidden;
    @media screen and (max-width: 768px) {
      padding: 0;
      margin: 0;
    }
  `,
};

export default PublicationListStyles;
