import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import UserList from './components/user-list';
import GroupList from './components/group-list';
import AddUser from './components/add-user';
import AddGroup from './components/add-group';

function App() {
  return (
    <div className="App">
      <Navbar>
        <div>
      <Nav variant="tabs" >
        <Nav.Item>
          <Link class="nav-link" to={"/users"}>User List</Link>
        </Nav.Item>
        <Nav.Item>
          <Link class="nav-link" to={"/groups"}>Group List</Link>
        </Nav.Item>
      </Nav>
      </div>
      </Navbar>

      <div className="container mt-4">
        <Switch>
          <Route exact path={["/","/users"]} render={(props)=>
          <UserList {...props}/>
          }>
          </Route>
          <Route exact path="/users/add" render={(props)=>
          <AddUser {...props}/>
          }>
          </Route>
          <Route exact path="/groups" render={(props)=>
          <GroupList {...props}/>
          }>
          </Route>
          <Route exact path="/groups/add" render={(props)=>
          <AddGroup {...props}/>
          }>
          </Route>
        </Switch>
      </div>
      <footer className="page-footer fixed-bottom font-small py-5">
                     © Copyright-<a
                  target="_blank"
                  className="text-reset fw-bold text-decoration-none"
                  href="https://github.com/tarp20"
        >
          Taras Piont
          </a>
          </footer>
    </div>
  );
}

export default App;
