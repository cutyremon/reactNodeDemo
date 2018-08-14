import actionTypes from "../constants/actionTypes";

function newReceived(news) {
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    }
}

function newsItemReceived(newsItem) {
    return {
        type: actionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

export function fetchNews(fakeNews) {
    return dispatch => {
        dispatch(newReceived(fakeNews))
    }
}

export function fetchNewsItem(fakeNewsItem) {
    return dispatch => {
        dispatch(newsItemReceived(fakeNewsItem))
    }
}
