import Home from './views/home/home';
import Login from './views/login/login';
import Register from './views/register/register';
import 'antd/dist/antd.css';
import './app.scss'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
