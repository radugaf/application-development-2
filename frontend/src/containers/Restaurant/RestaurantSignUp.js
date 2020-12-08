import React from "react";
// import AddProductCSS from "../assets/css/components-css/addProduct/addProduct.scss";

class RestaurantSignUp extends React.Component {
  render() {
    return (
      <div className="card-column padding-25">
        <form className="ui form" action="#">
          <div class="field">
            <label>Email</label>
            <input type="email" id="idemail" name="email" placeholder="email" />
          </div>
          <div class="field">
            <label>Username</label>
            <input
              type="text"
              id="idusername"
              name="username"
              placeholder="username"
            />
          </div>

          <div class="field">
            <label>Adresa Contact</label>
            <textarea
              type="text"
              id="idadresacontact"
              name="adresacontact"
              placeholder="Adresa de contact"
            />
          </div>

          <div class="field">
            <label>Numar de telefon</label>
            <input
              type="number"
              id="idnumardetelefon"
              name="numardetelefon"
              placeholder="Numarul de telefon"
            />
          </div>

          <div class="field">
            <label>Password</label>
            <input
              type="password"
              id="idpassword1"
              name="password1"
              placeholder="password"
            />
          </div>

          <div class="field">
            <label>Verify Password</label>
            <input
              type="password"
              id="idpassword2"
              name="password2"
              placeholder="password"
            />
          </div>

         
          <button class="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantSignUp;
