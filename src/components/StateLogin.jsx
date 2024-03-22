import { useState } from "react";

export default function Login() {
  
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: ''
  });

  const [didAdded, setDidAdded] = useState({
    email: false,
    password: false
  });

  const emailIsInvalid = didAdded.email && !enteredValue.email.includes('@');

  function handleSubmit(event){
    event.preventDefault();

    console.log(enteredValue)
    setEnteredValue({
      email: '',
      password: ''
    })
  }



  function handleInputBlure(identifier){
    setDidAdded(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value);
  // }

  function handleInputChange(identifier, value){
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidAdded(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() =>handleInputBlure('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValue.email} 
          />
          <div className="control-error">{emailIsInvalid && <p>Email adress is invalid</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password"
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValue.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
