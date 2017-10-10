import React from 'react';

//passing 'video' is the same as passing props and calling props.video in the return. 
//you are telling js you want only the video property instead of the entire props object.
//Same for onVideoSelect. 
const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    //VideoListItem takes the prop onVideoSelect from VideoList and says, 
    //"When I get clicked, call the function with the video I was passed"
    //Since each VideoListItem gets called with a different video, 
    //every instance gets the right video
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-item">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>
      
        <div className="media-body" > 
          <div className="media-heading">{title}</div>
        </div>
      </div> 
    </li>
  ); 
};

export default VideoListItem;