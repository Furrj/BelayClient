import React from "react";

//TYPES
import { IUser } from "../App";

interface IProps {
  userInfo: IUser;
  loggedIn: boolean;
}

const ProfilePage: React.FC<IProps> = ({ userInfo, loggedIn }) => {
  return (
    <div>
      {!loggedIn && <h2>Please Login</h2>}
      {loggedIn && <h1>{userInfo.username}'s Profile</h1>}
    </div>
  );
};

export default ProfilePage;
