import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class head extends Component {
    constructor() {
        super()
        this.state = {
            is_menu: false
        }
    }
    handleMenu = () => {
        console.log(this, this.setState.is_menu);
        this.setState.is_menu = ! this.setState.is_menu 
        this.setState({
            is_menu:this.setState.is_menu
        })
    }
    render() {
        return (
            <header className={'b_head'}>
                <div className={`${'b_head_con'} ${'ycz-card-default'}`}>
                    <div className={'b_h_con_left'}>
                        <Link className={'YCZ_blog'} to="/">YCZ的博客 </Link>
                    </div>
                    <div className={`b_h_con_right ${this.state.is_menu?'b_h_c_long':''}` }>
                        <Link to="/"> 首页 </Link>
                        <Link to="/"> 精选文章 </Link>
                        <Link to="/"> 关于我 </Link>
                        <Link to="/login">登录 </Link>
                        <Link to="/register"> 注册 </Link>
                    </div>
                    <div
                        className={`b_h_con_end ${this.state.is_menu?'b_h_c_end_T':'b_h_c_end_F'}`}
                        onClick={this.handleMenu}
                    >
                        <div></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default head;
