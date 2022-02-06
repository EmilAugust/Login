import classes from "./loginCard";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import MainContext from "../Helper/mainContext";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MainContext);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const login = {
      method: "GET",
      url: "http://localhost:3001/getLogin",
      params: { username: username, password: password },
    };
    axios.request(login).then((response) => {
      if (response.data.loginRequest === true) {
        context.login(response.data.userId)
        navigate("/profile", { replace: true });
      } else {
        alert("Incorrect username or password");
      }
    });
  }
  return (
    <div className={classes.loginCard}>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Username</label>
        <input
          placeholder="username"
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label htmlFor="">Password</label>
        <input
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Sign in</button>
      </form>
      <label htmlFor="">
        No account? <Link to="/register">Create one!</Link>
      </label>
    </div>
  );
}

export default LoginCard;
