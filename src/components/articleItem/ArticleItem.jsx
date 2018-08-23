import React, { Component } from 'react';


class ArticleItem extends Component{

    render() {
        return(
            <div>
                <span>{this.props.title}</span>
                <span>{this.props.updateTime}</span>
                <div>{this.props.desc}</div>
            </div>
        );
    }
}

const styles={
    title: {},
    time: {},
    desc: {},
}
export default ArticleItem;
