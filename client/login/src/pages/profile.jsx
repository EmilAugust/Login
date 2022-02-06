import { useContext, useState, useEffect } from "react";
import MainContext from "../Helper/mainContext";
import classes from "./profile.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const context = useContext(MainContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const userId = context.userId;

  useEffect(() => {
    if (userId === undefined) {
      navigate("/");
    }

    const login = {
      method: "GET",
      url: "http://localhost:3001/getProfile",
      params: { userId: userId },
    };
    axios.request(login).then((response) => {
      setUsername(response.data.username);
      setEmail(response.data.email);
    });
  });

  return (
    <div className={classes.profilePage}>
      <label>Signed in as {username}</label>
      <label>Email: {email} </label>
      <label>UserID: {userId}</label>
      <Link to="/">Sign out</Link>
    </div>
  );
}

export default Profile;
