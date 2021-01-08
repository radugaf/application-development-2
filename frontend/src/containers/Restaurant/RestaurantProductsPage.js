import React, { Component, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

class RestaurantProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  render() {
    var { isLoaded, items } = this.state;

    return (
      <>
        <div className="ui three column grid">
          {items.map((item) => (
            <div calssName="column">
              <div calssName="ui segment">
                <div className="ui card">
                  <div className="content">
                    <a className="header">{item.name}</a>
                    <div className="meta">
                      <span className="date">Added this time</span>
                    </div>
                    <div className="description">Product description</div>
                  </div>
                  <div className="extra content">
                    <a>
                      <i className="money icon"></i>
                      Price
                    </a>
                  </div>
                  <div className="extra content">
                    {
                      (item.name === "Leanne Graham")
                      ? <Button color="orange">Cere informatii</Button>
                      
                      : <Button color="green">Adauga in cos</Button>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default RestaurantProductsPage;
