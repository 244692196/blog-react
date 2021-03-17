import React, { Component } from 'react';
import { Input } from 'antd';
import { UserOutlined, ToolOutlined } from '@ant-design/icons';

class login extends Component {
    render() {
        return (
            <div>
                <Input
                    placeholder="用户名"
                    prefix={<UserOutlined />}
                />
                <Input
                    placeholder="密码"
                    prefix={<ToolOutlined />} />
            </div>
        );
    }
}

export default login;
