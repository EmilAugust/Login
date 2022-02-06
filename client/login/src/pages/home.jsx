import classes from './home.module.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={classes.homePage}>
      <Link to="/Login">Sign in</Link>
      <Link to="/Register">Sign up</Link>
    </div>
  )
}

export default Home