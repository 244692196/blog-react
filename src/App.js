import 'antd/dist/antd.css';
import './app.scss';
import React, { Component } from 'react';
// 引入头部导航组件
import Head from './components/head/head'
import routes from './router/router'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Head></Head>
        {/* 路由 */}
        <Switch>
          {
            routes.map((item, index) => {
              if (item.exact) {
                return (
                  <Route key={index} exact={item.exact} path={item.path} component={item.component}></Route>
                )
              } else {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    component={item.component}
                  //路由嵌套，父组件向子组件传值方法
                  // render={
                  //   (props) => {
                  //     return <item.component data={item.children} />
                  //   }
                  // }
                  ></Route>
                )
              }
            })
          }
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>

    );
  }
}
export default App;
