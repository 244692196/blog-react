import React, { Component } from 'react';
import '../../static/css/home.scss';
import { Layout, Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header } = Layout;
class home extends Component {
    render() {
        return (
            <Layout id={'bolg'}>
                <Header className={'b_head'}>
                    <Row className={'b_head_con'}>
                        <Col span={4}>YCZ的博客</Col>
                        <Col span={16}>
                            <Menu selectedKeys="" selectable='false' className={'b_h_con_menu'} mode="horizontal">
                                <Menu.Item>
                                    Navigation One
                                </Menu.Item>
                                <Menu.Item>
                                    Navigation Two
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col className='b_h_con_user' span={4}>
                            {/* <Breadcrumb>
                                <Breadcrumb.Item>登录</Breadcrumb.Item>
                                <Breadcrumb.Item>注册</Breadcrumb.Item>
                            </Breadcrumb> */}

                            <Link to="/login">登录 /</Link>
                            <Link to="/register"> 注册 </Link>

                        </Col>
                    </Row>
                </Header>
            </Layout>
        );
    }
}

export default home;
