import React from "react";
import { Button, Modal, Form, Icon, Label } from 'semantic-ui-react'
import DataTableDetails from "./datatabledetails";

export default function DataTableList({ data }) {

  const columns = data[0] && Object.keys(data[0]);

  const [open, setOpen] = React.useState(false);

  return (
    <table className="main-text-color comenziPrimiteTableHead">
      <tr>
        <th>#</th>
        <th>Client</th>
        <th>Data comanda</th>
        <th>Status</th>
        <th>Valoare</th>
        <th>Actiune</th>
      </tr>
      {data.map(row =>
        <>
        <tr>
        {
          columns.map(column => <td>{row[column]}</td>)
          }
      </tr>
        </>)

    }
      <tbody class="tbody">
      <tr>
        <td>1</td>
        <td>Edesia</td>
        <td>12.08.2020</td>
        <td class="green">Pending</td>
        <td>450 Lei</td>
        <td><i class="fas fa-eye"></i>
        </td>
      </tr>
      <tr>
        <td colspan="6"><DataTableDetails/></td>
      </tr>
      <tr>
        <td colspan="6">
          <Button color='green'>Accepta</Button>
          <Button color='red'>Refuza</Button>
          <Modal fluid
            centered={false}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button color='orange'>Cantitate Partiala</Button>}
          >
            <Modal.Header>Thank you!</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Group widths='equal'>
                    <Label fluid>
                      <Icon name='mail' /> Paste
                    </Label>
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Cantitate Disponibila'
                      placeholder='Cantitate..'
                    />
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Pret pe unitate'
                      placeholder='Pret...'
                    />
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group widths='equal'>
                    <Label fluid>
                      <Icon name='mail' /> Lapte
                    </Label>
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Cantitate Disponibila'
                      placeholder='Cantitate..'
                    />
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Pret pe unitate'
                      placeholder='Pret...'
                    />
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group widths='equal'>
                    <Label fluid>
                      <Icon name='mail' /> Blat
                    </Label>
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Cantitate Disponibila'
                      placeholder='Cantitate..'
                    />
                    <Form.Input
                      fluid
                      id='form-subcomponent-shorthand-input-last-name'
                      label='Pret pe unitate'
                      placeholder='Pret...'
                    />
                  </Form.Group>
                </Form>

              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setOpen(false)}>Salveaza</Button>
            </Modal.Actions>
          </Modal>
        </td>
      </tr>


      </tbody>
    </table>
  );
}
