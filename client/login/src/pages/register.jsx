import classes from './register.module.css'
import RegisterCard from '../components/registerCard'

function Register() {
  return (
    <div className={classes.registerPage}>
      <RegisterCard/>
    </div>
  )
}

export default Register