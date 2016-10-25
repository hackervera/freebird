import React from 'react'
import $ from 'jquery'
export default ({client, onLogin, loginAsGuest, scrollback}) => {
  return (
    <form onSubmit={(ev) => {
        ev.preventDefault();
        $("#login-form").css("display", "none");
        onLogin({username: $("#username").val(), password: $("#password").val()}, client);
      }} id="login-form">
      <p className="password-info"><b>This is ALPHA software</b> Enter your Matrix credentials. Password is not stored anywhere on server. It stays completely in browser</p>
        <input type="text" id="username" placeholder="Username"/>
        <input type="password" id="password" placeholder="Password"/>
        <button>Login</button>
        <h1>OR</h1>
        <p>
          <button onClick={(ev) => {
            ev.preventDefault();
            $("#login-form").css("display", "none");
            loginAsGuest(client)
          }}>Login as guest</button></p>
  </form>
  );
}
