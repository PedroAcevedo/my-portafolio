import { css } from 'styled-components';

const ExperienceListStyles = {
    wrapper: css`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding: 0px;
        margin: 0px;
     }
    `,
};

export default ExperienceListStyles;