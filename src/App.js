import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ background: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
