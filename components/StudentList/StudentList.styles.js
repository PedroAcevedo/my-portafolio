import { css } from "styled-components";

const StudentListStyles = {
  wrapper: css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 250px));
    justify-content: space-between;
    gap: 1.75rem;
    margin-top: 1rem;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (max-width: 760px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      justify-content: stretch;
    }

    @media screen and (max-width: 520px) {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }
  `,
  card: css`
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--color-border-muted);
    border-radius: 8px;
    background-color: var(--color-surface-light);
  `,
  imageFrame: css`
    position: relative;
    width: 100%;
    height: clamp(145px, 14vw, 180px);
    overflow: hidden;
    background-color: rgba(var(--color-accent-rgb), 0.22);
  `,
  photo: css`
    object-fit: cover;
  `,
  placeholder: css`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle 26px at 50% 28%, var(--color-text-strong) 0 100%, transparent calc(100% + 1px)),
      radial-gradient(ellipse 75px 60% at 50% 115%, var(--color-text-strong) 0 100%, transparent calc(100% + 1px)),
      rgba(var(--color-accent-rgb), 0.28);
    opacity: 0.68;
    @media screen and (min-width: 521px) {
      background:
        radial-gradient(circle 34px at 50% 28%, var(--color-text-strong) 0 100%, transparent calc(100% + 1px)),
        radial-gradient(ellipse 105px 65% at 50% 115%, var(--color-text-strong) 0 100%, transparent calc(100% + 1px)),
        rgba(var(--color-accent-rgb), 0.28);
    }
  `,
  body: css({ padding: 12 }),
  name: css`
    margin: 0;
    color: var(--color-text-title);
    font-size: 1rem;
    line-height: 1.25;
    overflow-wrap: anywhere;
  `,
  details: css`
    margin: 0.45rem 0 0;
    color: var(--color-text-base);
    font-size: 0.88rem;
    line-height: 1.4;
    overflow-wrap: anywhere;

    span {
      display: block;
    }
  `,
};

export default StudentListStyles;
