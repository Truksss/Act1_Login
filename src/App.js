import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

function App() {
  return (   
    <div className='container-box'>     
      <Logo />
      <title>Sign in to Github</title>
      <p className='head'>Sign in to GitHub </p>
        <form className='form'>
          <label className='label'>
            Username or email address
            <input className='username' type="text"/>
            Password <a href='#' className='pass'>Forgot Password?</a>
            <input className='password' type="password"/>
          </label>
          <Button title={"Sign In"}/>
        </form>

      <form className='form2'>
        <p><a href='#' className='signin'>Sign in with a passkey </a>
        New to Github? <a href='#' className='acc'>Create an account</a> </p>
      </form>

      <form className='form3'>
        <p>
          <a href='#' className='terms'>Terms</a>
        <a href='#' className='privacy'>Privacy</a>
        <a href='#' className='docs'>Docs</a>
        <a href='#' className='contact'>Contact Github Support</a>
        <a href='#' className='manage'>Manage cookies</a>
        <a href='#' className='info'>Do not share my personal information</a>
        </p>
      </form>
    </div>
  );
}

export default App;
