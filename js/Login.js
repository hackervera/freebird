import React from 'react'
import $ from 'jquery'
export default ({client, onLogin}) => {
  return (
    <form onSubmit={(ev) => {
        ev.preventDefault();
        $("#login-form").css("display", "none");
        onLogin({username: $("#username").val(), password: $("#password").val()}, client);
      }} id="login-form">
        <input type="text" id="username" placeholder="Username"/>
        <input type="password" id="password" placeholder="Password"/>
        <button>Login</button>
        <p className="password-info">Enter your Matrix credentials. Password is not stored anywhere on server. It stays completely in browser</p>
  </form>
  );
}
