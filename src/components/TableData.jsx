import React, { useContext } from 'react'
import { Table, Button, Image } from 'react-bootstrap';
import { HotelsContext } from '../context/HotelsContext';
import useGetHotels from '../hooks/useGetHotels';
import Loading from './Loading';


const TableData = () => {

    const { hotels, ShowSet, TitleDialogSet, HotelSet } = useContext(HotelsContext)
    const { loading } = useGetHotels();

    const handle = (title, hotel = {}) => {
        HotelSet(hotel)
        TitleDialogSet(title)
        ShowSet(true)
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='success' onClick={() => handle('Crear Hotel')} >Crear Hotel</Button>
            </div>
            <Table striped hover responsive>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        <th>#</th>
                        <th>IMAGEN</th>
                        <th>NOMBRE</th>
                        <th>CIUDAD</th>
                        <th>DIRECCION</th>
                        <th>NIT</th>
                        <th>HABITACIONES</th>
                        <th>HABITACIONES CONFIGURADAS</th>
                        <th>AGREGAR HABITACIONES</th>
                    </tr>
                </thead>
                {
                    !loading ?
                        <tbody>
                            <tr></tr>
                            {
                                hotels.map((item, index) =>
                                    <tr key={item.id} style={{ textAlign: 'center', verticalAlign: 'middle' }} >
                                        <td>{index + 1}</td>
                                        <td> <Image width='80' height='80' src="https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg" roundedCircle /></td>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.address}</td>
                                        <td>{item.nit}</td>
                                        <td>{item.Habitaciones}</td>
                                        <td>{item.hotel_type_accommodation.length}</td>
                                        <td><Button variant="success" onClick={() => handle('Crear habitaciones', { hotel_id: item.id, rooms_permitted: item.Habitaciones })}>+</Button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                        :
                        <tbody>
                            <tr style={{height: '300px'}}>
                                <td colSpan={9} style={{ textAlign: 'center' }}>
                                    <div style={{height:'300px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                       <div>
                                         <Loading></Loading>
                                       </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                }
            </Table>

        </>
    )
}

export default TableData