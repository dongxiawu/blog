import React, { Component } from 'react';

class Footer extends Component{

    render() {
        return(
            <div style={styles.footer}> Power by dongxia </div>
        );
    }
}

const styles ={
    footer: {
        display: 'flex',// 弹性布局
        flexDirection: 'row-reverse', //水平排列，起点在右端
        margin: '15px',
    }
}

export default Footer;
