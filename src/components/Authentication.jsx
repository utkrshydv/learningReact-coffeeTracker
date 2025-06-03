import { useState } from "react";

export default function Authentication() {
  
  const [isRegistration, setIsRegistration ] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleAuthenticate(){

  }


  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? "Sign Up" : "Login"}</h2>
      <p>{isRegistration ?"Create an account":"Sign in to your account!"}</p>

      <input 
      placeholder="email@email.com"
      value={email}
      onChange = {(e) => {setEmail(e.target.value)}}
      />

      <input placeholder="******" type="password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button
      onClick={handleAuthenticate}>
        <p>Submit</p>
      </button>

      <hr />

      <div className="register-content">
        <p>{isRegistration ? 'Already have an Account ? ' : 'Don\'t have an account?'}</p>
        <button
         onClick={(e) => {
          e.stopPropagation();
          setIsRegistration(prev => !prev)}
        }>
          <p>{isRegistration ? 'Sign in' : 'Sign Up'}</p>
        </button>
      </div>
    </>
  );
}
