import React, { Component } from 'react';

import Header from '../../components/header/Header';

import ArticleItem from '../../components/articleItem/ArticleItem.jsx';

import Footer from '../../components/footer/Footer.jsx';

class Home extends Component{
    render() {
        return(
            <div>
                <Header title={"dongxiawu"}/>
                <ArticleItem title={"test"} updateTime={"2018-01-01"} desc={"this is a test"}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
