import TopBar from './components/TopBar/topBar';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Single from './pages/Single/single';
import UserSettings from './pages/UserSettings/userSettings';
import Write from './pages/Write/write';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const user = false;

  return (
    <Router>
      <TopBar user={user} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <UserSettings /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
