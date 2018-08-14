import React, { Component } from 'react';
import { fetchNewsItem } from '../../actions/actions'

class NewsItemDetail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.body}</p>
            </div>
        )
    }
}

export default NewsItemDetail
