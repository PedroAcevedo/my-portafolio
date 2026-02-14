import { css, keyframes } from 'styled-components';

const shadowDance = keyframes`
    0%, 100% {
        text-shadow: 2px 2px 0 var(--color-neon-pink), 4px 4px 0 var(--color-neon-cyan);
    }
    50% {
        text-shadow: -2px -2px 0 var(--color-neon-cyan), -4px -4px 0 var(--color-neon-pink);
    }
`

const AboutStyles = {
  wrapper: css`
    width: 100%;
    text-align: left;
    color: inherit;
    text-decoration: none;
  `,
  row: css`
    display: flex;
    align-items: flex-start;
    gap: clamp(1rem, 3vw, 2rem);
    width: 100%;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  `,
  col: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 1 300px;
    min-width: 0;
    font-size: 1.05rem;
    @media screen and (max-width: 900px) {
      width: 100%;
      flex: 1 1 auto;
      font-size: 1rem;
    }
  `,
  colLeft: css`
    flex: 1 1 0;
    max-width: 100%;
  `,
  textItem: css`
    margin: 0.35rem 0;
    overflow-wrap: anywhere;
    line-height: 1.55;
  `,
  photo: css`
    object-fit: contain;
    width: min(300px, 70vw) !important;
    height: auto !important;
  `,
  profile: ({ background, size }) => css`
    width: min(${size}px, 70vw);
    max-width: 100%;
    cursor: pointer;
    &:hover {
      border-color: ${background};
    }
  `,
  link: css`
    color: var(--color-accent-soft);
    text-decoration: underline;
    text-underline-offset: 2px;
  `,
  line: css`
    color: var(--color-white);
    width: 100%;
    margin: 0.75rem 0;
  `,
  shadowDanceText: css`
    font-weight: bold;
    text-shadow: 2px 2px 0 var(--color-neon-pink), 4px 4px 0 var(--color-neon-cyan);
    animation: ${shadowDance} 2s infinite;
  `,
};



export default AboutStyles;

