import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class head extends Component {
    render() {
        return (
            <header className={'b_head'}>
                <div className={`${'b_head_con'} ${'ycz-card-default'}`}>
                    <div className={'b_h_con_left'}>
                        <Link className={'YCZ_blog'} to="/">YCZ的博客 </Link>
                    </div>
                    <div className={'b_h_con_right'}>
                        <Link to="/"> 首页 </Link>
                        <Link to="/"> 精选文章 </Link>
                        <Link to="/"> 关于我 </Link>
                        <Link to="/login">登录 </Link>
                        <Link to="/register"> 注册 </Link>
                    </div>
                    <div className={'b_h_con_end'}>
                        <div></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default head;
