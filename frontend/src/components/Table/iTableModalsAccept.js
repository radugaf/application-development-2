import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ITableModalsAccept() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button color='green'>Accepta Comanda</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='check circle' content='Accepta comanda' />
      <Modal.Content>
        <p>
          Esti sigur ca vrei sa accepti comanda pentru Restaurant 1 integral ?
        </p>
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
