import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDcz-TmjmtlMyIFIfk3ywdC24Jxt445rKA';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('most popular');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] /* sets first video on videoDetail*/
            });
        });



    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
            <a href="index.html">Home</a>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} /*passing this property to videoList. Updates the selected video*/
                    videos={this.state.videos} /> {/*makes searched videos available to VideoList. (passing prop videos to VideoList) */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
