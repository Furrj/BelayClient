import React, { useState } from "react";

interface IState {
  username: string;
  password: string;
}

const initState = {
  username: "",
  password: "",
};

const LoginPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IState>(initState);

  const login = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    await res.json();
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
      <button className="mt-3" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
