import React, { Component } from 'react';
import { Input } from 'antd';
import { UserOutlined, ToolOutlined } from '@ant-design/icons';
import '../../static/css/userState.scss'

class register extends Component {
    constructor() {
        super();
        //要使用this，必须要有super
        this.state = {

        }
    }
    registerFn = () => {
        
    }
    render() {
        return (
            <div id={'register'}>
                <div className={'register_con'}>
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

export default register;
