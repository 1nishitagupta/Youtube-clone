import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channel?id=${id}`).then((data) => {
      setChannelDetail(data?.meta);
    });
  }, [id]);
  console.log(channelDetail);
  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
