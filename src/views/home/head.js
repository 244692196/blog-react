import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom'
class head extends Component {
    render() {
        return (
            <Row className={'b_head_con'}>
                <Col span={4}>
                    <Link className='YCZ_Blog' to="/">YCZ的博客 </Link>
                </Col>
                <Col  className='b_h_con_menu' span={16}>
                    <Link to="/"> 首页 </Link>
                    <Link to="/"> 精选文章 </Link>
                    <Link to="/"> 关于我 </Link>
                </Col>
                <Col span={4}>
                    <Link to="/login">登录 </Link>
                    <Divider type="vertical" />
                    <Link to="/register"> 注册 </Link>
                </Col>
            </Row>
        );
    }
}

export default head;
