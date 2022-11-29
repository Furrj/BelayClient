import React, { useState } from "react";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");

  const readCookie = () => {
    const userID: any = Cookies.get("user_id");
    console.log(userId);
    const newUserID = userId.substring(3, 20);
    console.log(newUserID);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={readCookie}>Cookie</button>
    </div>
  );
};

export default HomePage;
