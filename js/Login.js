import React from 'react'
import $ from 'jquery'
export default ({client, onLogin}) => {
  return (
    <form onSubmit={(ev) => {
        ev.preventDefault();
        $("#login-form").css("display", "none");
        onLogin({username: $("#username").val(), password: $("#password").val()}, client);
      }} id="login-form">
      <input type="text" id="username"/>
      <input type="password" id="password"/>
      <button>Login</button>
  </form>
  );
}
