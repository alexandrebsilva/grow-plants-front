import React from "react";

const Register = (props) => {
  //   {
  //     "first_name": "Alexandre",
  //     "last_name": "Borges",
  //     "email": "alexandre@admin.com",
  //     "password": "123456"
  // }
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="First Name" name="first_name"></input>
        <input type="text" placeholder="Last Name" name="last_name"></input>
        <input type="text" placeholder="E-mail" name="email"></input>
        <input type="text" placeholder="password" name="password"></input>
        <input type="submit" value="login"></input>
      </form>
    </div>
  );
};

export default Register;
