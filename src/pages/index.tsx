import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";



export default function Home() {
  return (
    <div>
      <h1>Acceder</h1>
      <Form> 
          <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Control type='text' placeholder='Usuario'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
                <Form.Control type='text' placeholder='Contraseña' />
          </Form.Group>
            <Button variant='primary' type='button' href="/Pagina2">Ingresar</Button>
            <Link href='/Pagina1'>Crear Usuario</Link>
      </Form>
    </div>
  );
}
