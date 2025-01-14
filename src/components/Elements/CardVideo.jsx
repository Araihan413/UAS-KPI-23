import React, { useState, useEffect } from "react";
import axios from "axios";

const CardVideo = (props) => {
  const { idVideo, idChannel } = props
  const [channelData, setChannelData] = useState(null);
  const [videoData, setVideoData] = useState(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = idChannel; // Ganti dengan Channel ID
  const VIDEO_ID = idVideo; // Ganti dengan Video ID
  // UCp_TlWVCLQHmRN2j3WW4bvQ
  // T19KPhoQdw4
  useEffect(() => {
    // Fetch Channel Data
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${API_KEY}`
      )
      .then((response) => {
        const data = response.data.items[0];
        setChannelData({
          profilePicture: data.snippet.thumbnails.default.url,
          title: data.snippet.title,
        });
      })
      .catch((error) => console.error("Error fetching channel data:", error));

    // Fetch Video Data
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${VIDEO_ID}&key=${API_KEY}`
      )
      .then((response) => {
        const data = response.data.items[0];
        setVideoData({
          title: data.snippet.title,
          views: data.statistics.viewCount,
        });
      })
      .catch((error) => console.error("Error fetching video data:", error));
  }, [API_KEY, CHANNEL_ID, VIDEO_ID]);
  return (
    <>
      <div className='font-sekunder w-80'>
        <div className='w-max rounded-lg overflow-hidden mb-2'>
          <iframe
            width="320"
            height='180'
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className='flex space-x-3'>
            {channelData && (
              <figure>
                <img className='w-10 rounded-full' src={channelData.profilePicture} alt="profil youtube" />
              </figure>
            )}
            {videoData && channelData && (
              <div>
                <h1 className='font-medium text-lg mb-2 leading-none'>{videoData.title}</h1>
                <h1 className='text-sm text-[#797979] leading-none mb-1'>{channelData.title}</h1>
                <h2 className='text-sm text-[#797979] leading-none'>{videoData.views} x ditonton</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVideo;
