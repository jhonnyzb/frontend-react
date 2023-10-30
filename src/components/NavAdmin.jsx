import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavAdmin = () => {
    return (
        <>
            <div style={{ backgroundColor: '#4E6B86', display: 'flex', justifyContent: 'space-around', padding: '20px', borderRadius: '10px' }}>
                <p style={{fontSize:'30px', fontWeight:'bold', color: '#ffffff'}}>ADMIN</p>
                <Link  to='/' style={{fontSize:'30px', fontWeight:'bold', color: '#ffffff'}}>SALIR</Link>
            </div>
        </>
    )
}

export default NavAdmin