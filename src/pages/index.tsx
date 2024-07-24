import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/Home.module.css";
import { Image } from "react-bootstrap";


export default function Home() {
  return (
    <div>
      <h1>Acceder</h1>
      <Form> 
          <Form.Group  className="mb-3" controlId="formBasicNombre">
                <Form.Control size="lg" type='text' placeholder='Usuario'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicApellido">
                <Form.Control type='password' placeholder='Contraseña' />
          </Form.Group>
          <Button variant="outline-dark" type="submit" size="lg" href="/Pagina2">Ingresar</Button>
      </Form>
      
    </div>
  );
}

<Image src="https://www.liblogo.com/img-logo/ri8566rde0-riot-games-logo-riot-games-black-thumbnail-transparent-png-stickpng.png/100px250" fluid />



