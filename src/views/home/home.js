import React, { Component } from 'react';
import '../../static/css/home.scss';

class home extends Component {
    constructor(props) {
        super()
    }
    componentDidMount () {
        console.log(this.props.location.pathname);
    }
    render() {
        return (
            <div className={'b_content'}>
                <div className={'b_con_left'}>
                    <ul className={'b_con_left_list'}>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                        <li className={`${'b_con_l_list_li'} ${'ycz-card-default'}`}></li>
                    </ul>
                </div>
                <div className={'b_con_right'}>
                    <div className={'b_con_right_con'}>
                        <div className={`${'b_con_r_con_item'} ${'ycz-card-default'}`}></div>
                        <div className={`${'b_con_r_con_item'} ${'ycz-card-default'}`}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
