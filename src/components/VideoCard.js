import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    channelId,
    channelThumbnail,
    viewCount,
    videoId,
    title,
    thumbnail,
    richThumbnail,
    publishedText,
    lengthText,
    description,
    channelTitle,
  },
}) => {
  console.log(thumbnail);
  return (
    <>
      <Link to="">
        <CardMedia image={thumbnail[0].url} sx={{ width: 360, height: 200 }} />
      </Link>
    </>
  );
};

export default VideoCard;
