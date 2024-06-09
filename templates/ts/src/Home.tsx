import { Title } from '@solidjs/meta';
import { css } from 'solid-styled-components';
import solidLogo from './assets/universal-solid-app.svg';
// import npmLogo from './assets/npm.svg';
import githubLogo from './assets/github.svg';

const Home = () => {
  return (
    <div
      class={css`
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        justify-content: center;
        margin-bottom: 24px;
        margin-top: 96px;
        min-height: 80vh;
        padding: 20px;
      `}
    >
      <Title>Universal Solid App</Title>
      <div
        class={css`
          align-items: center;
          backdrop-filter: blur(8px);
          background-color: #fff8;
          box-sizing: border-box;
          column-gap: 24px;
          display: flex;
          justify-content: end;
          left: 0;
          min-height: 64px;
          padding: 0 24px;
          position: fixed;
          top: 0;
          width: 100%;
          & img {
            opacity: 0.7;
          }
        `}
      >
        {/*
        <a href="">
          <img alt="NPM logo" height={28} src={npmLogo} />
        </a>
        */}
        <a
          href="https://github.com/JulianSoto/create-universal-solid-app"
          target="_blank"
        >
          <img alt="Github logo" height={32} src={githubLogo} />
        </a>
      </div>
      <a href="https://www.solidjs.com" target="_blank">
        <img alt="Solid logo" class={css``} height={140} src={solidLogo} />
      </a>
      <h1
        class={css`
          font-size: 40px;
          font-weight: 300;
          text-align: center;
        `}
      >
        Universal Solid App
      </h1>
      <span
        class={css`
          background-color: #f2f2f2;
          border-radius: 999px;
          color: #222;
          padding: 8px 16px;
          text-align: center;
        `}
      >
        Edit <code>src/Home.tsx</code> and save to test HMR
      </span>
      <h2
        class={css`
          font-weight: 400;
          margin-bottom: 8px;
          margin-top: 64px;
        `}
      >
        Learn more
      </h2>
      <div
        class={css`
          color: #222;
          text-align: center;
        `}
      >
        <p>
          <em>Server-Side rendering.</em> Vitejs.{' '}
          <a href="https://vitejs.dev/guide/ssr" target="_blank">
            vitejs.dev/guide/ssr
          </a>
        </p>
        <p>
          <em>Solid Docs.</em>{' '}
          <a href="https://docs.solidjs.com" target="_blank">
            docs.solidjs.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
