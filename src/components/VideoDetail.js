import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div
          class="ui segment"
          style={{ borderRadius: "0", width: "100%", height: "65vh" }}
        >
          <div class="ui active dimmer">
            <div class="ui medium text loader">Loading</div>
          </div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
