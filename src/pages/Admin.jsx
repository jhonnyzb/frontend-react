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

      <Container style={{ display: 'flex', height: '100vh', flexDirection: 'column', justifyContent: 'center' }}>
        <NavAdmin></NavAdmin>
        <div style={{ backgroundColor: '#4E6B86', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', borderRadius: '10px',marginTop: '15px' }}>
          <TableData></TableData>
          <div style={{ backgroundColor: '#2F3F50', maxWidth: '50%', height:'50px', borderRadius: '10px',display: 'flex', justifyContent: 'space-around', alignItems:'center', color:'#ffffff', fontWeight:'bold' }}>
              <span>Información</span>
              <span>2023</span>
          </div>
        </div>
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