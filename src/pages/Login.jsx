import React, { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import styles from '../styles/login.module.css';
import { useNavigate } from 'react-router-dom';
import { NotificacionContext } from '../context/NotificacionContext';



const Login = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <section className={styles.container_main}>
        <Button variant="success" onClick={() => navigate('/admin')}>Admin Hoteles</Button>
      </section>
    </Container>
  )
}

export default Login