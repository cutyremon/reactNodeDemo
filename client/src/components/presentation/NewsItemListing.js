import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class NewsItemListing extends Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div>
                <div><Link to={'/new/' + this.props.data._id} >{this.props.data.title}</Link></div>
                <div>{this.props.data.teaser}</div>
            </div>
        )
    }
}
    
export default NewsItemListing
