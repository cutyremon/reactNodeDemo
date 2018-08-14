import React, { Component } from 'react';
import New from './../containers/News'
class Home extends Component {
    render() {
        return (
        <div><div> Welcome to MadOwlNews.com </div>
        <div>
            <New/>
        </div>
        </div>
        )
    }
}

export default Home;