import React from "react";
import { Grid, Image, Button, Checkbox, Form, Card, Divider, Header } from 'semantic-ui-react'

class ForgotPassword extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' centered fluid className="custom-login-wrapper">
          <Grid.Row>
            <Grid.Column computer="6" mobile="15" tablet="12">
              <Card fluid>
                <Card.Content>
                  <Card.Header textAlign='center'>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='tiny' alt='Logo'/>
                  </Card.Header>
                  <Divider horizontal>Recuperare parola</Divider>
                  <Form>
                   <Form.Field>
                     <label>Adresa de E-mail</label>
                     <input placeholder='Adresa de E-mail' />
                   </Form.Field>
                   <Form.Field>
                     <label>Parola Noua</label>
                     <input placeholder='Parola dvs.' type='password'/>
                   </Form.Field>
                   <Form.Field>
                     <label>Confirma parola noua</label>
                     <input placeholder='Parola dvs.' type='password'/>
                   </Form.Field>
                   <Button fluid color='green' type='submit'>Schimba parola</Button>
                 </Form>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default ForgotPassword;
