import { MetaProvider } from '@solidjs/meta';
import { Router, Route } from '@solidjs/router';
import Home from './Home';

function App(props: { url?: string }) {
  return (
    <MetaProvider>
      <Router url={props.url}>
        <Route path="/" component={Home} />
      </Router>
    </MetaProvider>
  );
}

export default App;
