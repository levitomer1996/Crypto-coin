import React, { useState } from "react";
import cryptoCastle from "../API/cryptoCastle";
export default () => {
  const loginToServer = async (user_id) => {
    try {
      const res = await cryptoCastle.post("/login", { user_id });
    } catch (error) {
      console.log(error);
    }
  };
  return;
};
