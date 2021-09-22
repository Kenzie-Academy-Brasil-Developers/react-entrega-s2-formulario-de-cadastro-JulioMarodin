import { Route, Switch } from 'react-router';
import Register from '../pages/register';
import Home from '../pages/home';

const Routes = ({ name, setName }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Register setName={setName} />
      </Route>
      <Route path="/home/:user">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
