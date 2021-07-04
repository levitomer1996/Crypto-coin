import React, { useState } from "react";
import coinServer from "../API/coinServer";

export default () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const res = await coinServer.get("/test");
      console.log(res.data);
      setList(res.data);
    } catch (error) {}
  };
  return [list, getList];
};
