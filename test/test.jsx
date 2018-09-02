import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let username = this.props.getFiled('username');
    }

    getDefaultProps() {

    }

    getInitialState() {

    }

    componentWillMount() {
        console.log('Component WILL MOUNT!');
    }

    componentDidMount() {
        console.log('Component DID MOUNT!');
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!');
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!');
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!');
    }

    // 渲染
    render() {
        return (
            <div></div>
        );
    }
}
