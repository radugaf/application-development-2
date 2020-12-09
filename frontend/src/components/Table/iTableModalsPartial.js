import React from 'react'
import { Button, Modal, Form, Icon, Label, Header } from 'semantic-ui-react'

function ITableModalsAccept() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button color='yellow'>Onoreaza partial comanda</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='edit' content='Accepta comanda' />
      <Modal.Content>
        <Form>
          <Form.Group>
            <Label fluid>
              Paste
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
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
           Nu
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
           Da
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ITableModalsAccept
