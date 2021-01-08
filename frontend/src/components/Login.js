import React from "react";
import {
  Grid,
  Image,
  Button,
  Checkbox,
  Form,
  Card,
  Divider,
  Header,
} from "semantic-ui-react";

import Logo from "../assets/img/logo.png";

import { connect } from "react-redux";
import { SetToken } from "../redux/actions/products";

const Login = ({ SetToken }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    SetToken({ username, password });
  };

  return (
   <div className='login-center-wrapper'>
    <div className='login-wrapper flex-column card-row padding-15'>
      <img src={Logo}></img>

      <form className='form-wrapper' onSubmit={onSubmit}>

      <div className='form-item'>
        <label>Email</label>
        <input type='text' name="username"
              id="username"
              onChange={onChange}
              required
              value={formData.username}></input>
        <i class="fal fa-envelope"></i>
      </div>

      <div className='form-item margin-top-25'>
        <label>Password</label>
        <input type='password' name="password"
              id="password"
              onChange={onChange}
              required
              value={formData.password}></input>
        <i class="fal fa-key"></i>
      </div>

      <button className='login-button' type="submit">Login</button>

      </form>


      <div className='login-no-account'>Nu ai cont? <br/> Trimite-ne un e-mail la adresa contact@edesia.ro</div>
    </div>
   </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.product,
  };
};
export default connect(mapStateToProps, { SetToken })(Login);
