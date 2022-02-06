import { useState } from "react";
import classes from "./registerCard";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterCard() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPassword, setVerifiedPassword] = useState("");

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      verifiedPassword === ""
    ) {
      alert("Missing information");
    } else if (password !== verifiedPassword) {
      alert("Those passwords didn't match. Try again.");
    } else {
      Axios.post("http://localhost:3001/create", {
        email: email,
        username: username,
        password: password,
      }).then((response) => {
        if (response.data === true) {
          alert("User registered")
          navigate("/login", { replace: true });
        } else {
          alert("The username or email already exists.")
        }
      });
    }
  }
  return (
    <div className={classes.registerCard}>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="">Username</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label htmlFor="">Verify Password</label>
        <input
          type="password"
          onChange={(event) => {
            setVerifiedPassword(event.target.value);
          }}
        />
        <button type="submit">Sign up</button>
      </form>
      <label htmlFor="">
        <Link to="/login">Sign in instead</Link>
      </label>
    </div>
  );
}

export default RegisterCard;
