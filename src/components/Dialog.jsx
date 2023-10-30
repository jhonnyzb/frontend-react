import React, { useContext } from 'react'
import { HotelsContext } from '../context/HotelsContext'
import { Button, Modal } from 'react-bootstrap'

const Dialog = ({ children, title = 'Crear Hotel' }) => {


    const { show, ShowSet } = useContext(HotelsContext)

    return (
        <Modal
            backdrop="static"
            keyboard={false}
            size='lg'
            show={show}
            onHide={() => ShowSet(false)}
            centered
        >
            <Modal.Header closeButton style={{backgroundColor:'#4E6B86'}}>
                <Modal.Title style={{color:'white'}}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Dialog