import React, { Component } from 'react';
import '../../static/css/userState.scss'
class login extends Component {
     //监听url变化
    render() {
        return (
            <div id={'login'}>
                <div className={'login_con'}>
                    <input type="text" placeholder="用户名" />
                    <input type="text" placeholder="密码" />
                </div>
            </div>
        );
    }
}

export default login;
