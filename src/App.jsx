import './App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PageLayout from 'components/pagelayout';
import Admin from 'admin'
import AuthBase from 'auth/authbase';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PageLayout} />
          <Route path="/ifarm/*" exact component={PageLayout} />
          <Route path="/auth/:authname" exact component={AuthBase} />
          <Route path="/category/:productname" component={PageLayout} />
          <Route path="/admin/dashboard" exact component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
