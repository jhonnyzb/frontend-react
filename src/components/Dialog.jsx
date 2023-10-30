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
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Dialog