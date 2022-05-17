import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuotesDetails from './pages/QuotesDetail';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quote" />
        </Route>
        <Route path="/quote" exact>
          <AllQuotes />
        </Route>
        <Route path="/quote/:quoteId">
          <QuotesDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
            <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
