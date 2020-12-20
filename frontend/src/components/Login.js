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
    <Grid
      verticalAlign="middle"
      centered
      fluid
      className="custom-login-wrapper"
    >
      <Grid.Row>
        <Grid.Column computer="6" mobile="15" tablet="12">
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign="center">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  size="tiny"
                  alt="Logo"
                />
              </Card.Header>
              <Divider horizontal>Login with username</Divider>
              <Form onSubmit={onSubmit}>
                <Form.Field>
                  <label>Adresa de UserName</label>
                  <input
                    placeholder="Adresa de UserName"
                    type="text"
                    name="username"
                    id="username"
                    onChange={onChange}
                    required
                    value={formData.username}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Parola</label>
                  <input
                    placeholder="Parola dvs."
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                    required
                    value={formData.password}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="Tine-ma minte" />
                </Form.Field>
                <Button fluid color="green" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Content>
            <Divider horizontal>Nu ai cont ?</Divider>
            <Header as="h5" icon textAlign="center">
              <Header.Content>
                Trimite-ne un email la contact@edesia.com
              </Header.Content>
            </Header>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.product,
  };
};
export default connect(mapStateToProps, { SetToken })(Login);
