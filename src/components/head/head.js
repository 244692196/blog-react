import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../static/css/head.scss';
class head extends Component {
    constructor() {
        super()
        this.state = {
            is_menu: false,
            change_menu: false,
            change_menu_style: {}
        }
    }
    componentDidMount() {
        // 事件监听
        window.addEventListener('scroll', this.bindHandleScroll)

        if (window.pageYOffset > 160) {
            this.setState({
                change_menu: true
            })
        } else {
            this.setState({
                change_menu: false
            })
        }

    }
    handleScrollToElement(event) {

        console.log('123');

    }

    //滑动滚动条功能函数
    bindHandleScroll = (event) => {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        console.log(scrollTop);
        if (scrollTop > 130) {
            this.setState({
                change_menu: true,
                change_menu_style: {
                    top: ' -60px'
                }
            })
        } else {
            this.setState({
                change_menu: false,
            })
        }
        if (scrollTop > 160) {
            this.setState({
                change_menu_style: {
                    top: '0'
                }
            })
        } else {
            this.setState({
                change_menu_style: {
                    top: ' -100px'
                }
            })

        }
    }
    handleMenu = () => {
        this.setState.is_menu = !this.setState.is_menu
        this.setState({
            is_menu: this.setState.is_menu
        })
    }
    render() {
        const b_head_S = this.state.change_menu ? { height: '120px', margin: ' 0 auto 30px' } : { height: '60px', margin: ' 60px auto 30px' };
        return (
            <header className={'b_head'} style={b_head_S}>
                <div style={this.state.change_menu_style}
                    className={`${this.state.change_menu ? 'b_head_con_change' : ''} ${'b_head_con'} ${'ycz-card-default'}`}>
                    <div className={'b_h_con_left'}>
                        <Link className={'YCZ_blog'} to="/">YCZ的博客 </Link>
                    </div>
                    <div className={`b_h_con_right ${this.state.change_menu ? 'b_h_c_show' : ''} ${this.state.is_menu ? 'b_h_c_long' : ''}`}  >
                        <Link to="/" > 首页 </Link>
                        <Link to="/" > 精选文章 </Link>
                        <Link to="/about"  > 关于我 </Link>
                        <Link to="/login"  >登录 </Link>
                        <Link to="/register"  > 注册 </Link>
                    </div>
                    <div
                        className={`b_h_con_end ${this.state.change_menu ? 'b_h_c_end_no' : ''} ${this.state.is_menu ? 'b_h_c_end_T' : 'b_h_c_end_F'} `}
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
