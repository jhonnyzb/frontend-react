import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'


import NavAdmin from '../components/NavAdmin';
import TableData from '../components/TableData';
import Dialog from '../components/Dialog';
import { HotelsContext } from '../context/HotelsContext';
import FormHotel from '../components/FormHotel';
import FormAddRooms from '../components/FormAddRooms';


const Admin = () => {

  const { titleDialog } = useContext(HotelsContext)

  return (
    <>
      <NavAdmin></NavAdmin>
      <Container>
        <TableData></TableData>
      </Container>
      <Dialog title={titleDialog}>
        {
          titleDialog === 'Crear Hotel' ?
            <FormHotel></FormHotel> :
            <FormAddRooms></FormAddRooms>
        }
      </Dialog>
    </>
  )
}

export default Admin