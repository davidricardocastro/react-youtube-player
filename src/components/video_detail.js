import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-lg-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowfullscreen></iframe>
            </div>
            <div className="details ">
                <div className="font-weight-bold py-2">{video.snippet.title}</div>
                <div className="font-weight-light py-2">{video.snippet.description}</div>
                <div className="font-weight-normal pt-2">Published by: {video.snippet.channelTitle}</div>
                <div className="font-weight-normal pb-2">{video.snippet.publishedAt}</div>
                
            </div>
        </div>

    );

};

export default VideoDetail;