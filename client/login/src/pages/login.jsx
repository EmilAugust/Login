import classes from './login.module.css'
import LoginCard from '../components/loginCard'

function Login() {
  return (
    <div className={classes.loginPage}>
      <LoginCard/>
    </div>
  )
}

export default Login