import React, { Component } from 'react';
import { Input } from 'antd';
import { UserOutlined, ToolOutlined } from '@ant-design/icons';
import '../../static/css/userState.scss'
class login extends Component {
    render() {
        return (
            <div id={'login'}>
                <div className={'login_con'}>
                    <Input
                        placeholder="用户名"
                        prefix={<UserOutlined />}
                    />
                    <Input
                        placeholder="密码"
                        prefix={<ToolOutlined />} />
                </div>
            </div>
        );
    }
}

export default login;
