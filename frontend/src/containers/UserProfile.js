import React from "react";


class UserProfile extends React.Component {
  render() {
    return (
        <div className="card-column padding-25">
            <div>
                <span>Avatar: </span>
                <img src="#" alt="Avatar Image"></img>
            </div>

            <div className="margin-top-10">
                <span>Email: </span>
                <span>radugaf@gmail.com</span>
            </div>

            <div className="margin-top-10">
                <span>Nume: </span>
                <span>Gafita</span>
            </div>

            <div className="margin-top-10">
                <span>Prenume: </span>
                <span>Radu</span>
            </div>

            <div className="margin-top-10">
                <span>Telefon: </span>
                <span>0757021351</span>
            </div>

            <div className="margin-top-10">
                <span>Adresa contact: </span>
                <span>Strada Octaviang Goga Lalalala</span>
            </div>
        </div>
    );
  }
}

export default UserProfile;
