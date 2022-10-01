import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet: { thumbnails, title, publishedAt, channelId, channelTitle },
  },
}) => (
  <Card
    sx={{
      width: { xs: "90vw", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
    className="animate__animated animate__fadeIn"
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={thumbnails?.high?.url}
        alt={title}
        sx={{ width: { xs: "90vw", sm: "358px", md: "320px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
      <Typography color="#fff" variant="caption">
        {publishedAt.slice(0, 10)}
      </Typography>
      <Link to={`/video/${videoId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {title.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${channelId}`}>
        <Typography variant="subtitle2" color="gray">
          {channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
