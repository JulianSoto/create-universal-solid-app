import {
  generateHydrationScript,
  getAssets,
  renderToString,
} from 'solid-js/web';
import { extractCss } from 'solid-styled-components';
import App from './App';

export function render(url: string) {
  const appRoot = renderToString(() => <App url={url} />);
  const appHead =
    generateHydrationScript() + getAssets() + `<style>${extractCss()}</style>`;

  return { appHead, appRoot };
}
