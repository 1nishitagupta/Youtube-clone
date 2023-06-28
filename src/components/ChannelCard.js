import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`channel/${channelDetail?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.channelThumbnail
                ? channelDetail?.channelThumbnail[0]?.url
                : demoProfilePicture
            }
            alt={channelDetail?.channelDetail}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
