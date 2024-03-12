import React from "react";

const VideoComponent: React.FC = () => {
  return (
    <div className=" w-full h-full fadeIn opacity-75 loaded">
      <div
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://iframe.videodelivery.net/d70aee0e18e890e67bed8689a5233d51?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fd70aee0e18e890e67bed8689a5233d51%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          style={{
            border: "none",
            top: "auto",
            aspectRatio: "16 / 9",
            minWidth: "900px",
            width: "100vw",
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
