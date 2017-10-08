import React from 'react';

//passing 'video' is the same as passing props and calling props.video in the return. 
//you are telling js you want only the video property instead of the entire props object. 
const VideoListItem = ({video}) => {
const imageURL = video.snippet.thumbnails.default.url;
const title = video.snippet.title
  return (
    <li className="list-group-item">
      <div className="video-list-item">
        <div className="media-left">
          <img classname="media-object" src={imageURL}/>
        </div>
      
        <div className="media-body" > 
          <div classname="media-heading">{title}</div>
        </div>
      </div> 
      {video.snippet.title}
    </li>
  ); 
};

export default VideoListItem;