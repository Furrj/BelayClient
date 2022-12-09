import React, { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

//TYPES
import { IUser } from "../App";

interface IProps {
  userInfo: IUser;
  loggedIn: boolean;
}

const ProfilePage: React.FC<IProps> = ({ userInfo, loggedIn }) => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (!loggedIn) return navigate("/login");
  }, []);

  return (
    <div className="card">
      <div className="card-title">
        <h2>{userInfo.username}</h2>
        <hr />
      </div>
      <div className="card-body">
        Name
      </div>
    </div>
  );
};

export default ProfilePage;
