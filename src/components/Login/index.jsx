import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="login_form_email">
          <label htmlFor="Email">Email</label>
          <input id="Email" type="email" />
        </div>
        <div className="login_form_password">
          <label htmlFor="Password">Password</label>
          <input id="Password" type="password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
