import React, { Component } from 'react';

class Article extends Component{

    render() {
        return(
            <div>
                <span>{this.props.title}</span>
                <span>{this.props.author}</span>
                <p>{this.props.detail}</p>
            </div>
        );
    }
}

export default Article;
