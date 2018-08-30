import React, { Component } from 'react';
import NewsItemDetail from '../components/presentation/NewsItemDetail';
import { connect } from 'react-redux'
import { fetchNewsItem } from '../actions/newsActions'

class NewsArticle extends Component {


    componentDidMount() {

        this.props.dispatch(fetchNewsItem(this.props.match.params.id));
    }

    render() {
        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {!this.props.newsItemloading ? <NewsItemDetail data={this.props.newsItem} /> : <div>loading</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem,
        newsItemloading:state.news.newsItemloading
    }
}

export default connect(mapStateToProps)(NewsArticle)
