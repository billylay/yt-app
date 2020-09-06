import React, { useState, useEffect } from "react";
import youTube from "../api/youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); // run once

  const search = async (defaultSearchTerm) => {
    const response = await youTube.get("/search", {
      params: {
        q: defaultSearchTerm,
      },
    });
    setVideos(response.data.items);
  };

  // convention of hooks return array
  return [videos, search];
};

export default useVideo;
