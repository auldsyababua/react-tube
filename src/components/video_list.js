//This component is functional because it has no need for state
import React from 'react';
import VideoListItem from './video_list_item'

//The props object applied to VideoList in index will arrive as an argument to the function (line 10)
//props.videos is this.state.videos from index. 
//In const videoItems, we are iterating over the video array returned by youtube api
//and returning one instance of VideoListItem component each time. 
//in the return, you are instanitating a VideoListItem and passing it the currently iterated video object as a prop called 'video' 
const VideoList = (props) => {
  const videoItems = props.videos.map ((currentVideo) => {
    return (
      //VideoList takes the prop onVideoSelect and passes it as a prop for VideoListItem
      //from its parent to its child.
      <VideoListItem 
        onVideoSelect = {props.onVideoSelect}
        key={currentVideo.etag} 
        video={currentVideo}/>
    );
  });

  //Line 18 we are referencing the videoItems array returned on line 12 to return the list items
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>      
  );
};

export default VideoList;