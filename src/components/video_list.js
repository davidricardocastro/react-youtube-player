import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect = {props.onVideoSelect} /*passing prop (onVideoSelect) to VideoListItem*/
        key={video.etag} 
        video={video} />; {/*single video intem is passed as property name: video */}
    });

    return (
        <ul className="col-lg-4 list-group pb-3">
        {videoItems}

        </ul>
    );


};

export default VideoList;

