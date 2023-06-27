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
  demoProfilePicture,
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
  console.log(channelThumbnail);
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnail[0].url}
          sx={{ width: { xs: "100%", md: 380 }, height: 200 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
          <Box>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography color="#fff">
                {title?.slice(0, 60) || demoVideoTitle?.slice(0, 60)}...
              </Typography>
            </Link>

            <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={
                    channelThumbnail
                      ? channelThumbnail[0]?.url
                      : demoProfilePicture
                  }
                  alt="channel thumbnail"
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
                <Typography color="#fff" variant="subtitle1">
                  {channelTitle || demoChannelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Box>
            </Link>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
