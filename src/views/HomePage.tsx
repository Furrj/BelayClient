import React, {useState} from "react";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");

  const readCookie = () => {
    console.log(Cookies.get("user_id"));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={readCookie}>Cookie</button>
    </div>
  );
};

export default HomePage;
