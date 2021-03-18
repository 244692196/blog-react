import React, { Component } from 'react';
import '../../static/css/home.scss';
import { Layout } from 'antd';
import Head from './head'
import routes from '../../router/router'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
const { Header } = Layout;
class home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout id={'bolg'}>
                    <Header className={'b_head'}>
                        <Head></Head>
                    </Header>
                </Layout>
                {/* 路由 */}
                <Switch>
                    {
                        routes.map((item, index) => {
                            console.log(item);
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
                </Switch>
            </BrowserRouter>
        );
    }
}

export default home;
