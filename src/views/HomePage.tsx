import React, {useState} from "react";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");

  if (Cookies.get('user_id')) {
    console.log("User Id:" + Cookies.get('user_id'));
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
