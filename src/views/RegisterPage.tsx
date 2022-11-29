import React, { useState } from "react";

import UsernameTaken from "../layouts/UsernameTaken";

interface IState {
  username: string;
  password: string;
}

const initState: IState = {
  username: "",
  password: "",
};

const RegisterPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IState>(initState);
  const [taken, setTaken] = useState<boolean>(false);

  const register = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data: string = await res.json();
    if (data === "Taken") {
      setTaken(true);
    } else {
      console.log(data);
      setTaken(false);
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>Username: </div>
      <input
        type="text"
        name="username"
        value={userInfo.username}
        onChange={inputHandler}
      />
      <br />
      <div>Password:</div>
      <input
        type="text"
        name="password"
        value={userInfo.password}
        onChange={inputHandler}
      />
      <br />
      {taken && <UsernameTaken />}
      <br />
      <button className="mt-3" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
