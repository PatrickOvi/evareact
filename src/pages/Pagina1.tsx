import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Usuario } from '@/Interfaces/IUsuario';
import { registrarUsuario } from '@/Firebase/Promesas';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState:Usuario = {
    usuario:" ",
    contraseña:" "
}

export const Pagina1 = ()=>{
    const [Usuario, setUsuario] = useState<Usuario>(initialState)

    const handleUsuario=(name:string,value:string)=>{
        setUsuario({...Usuario,[name]:value})
    }
    const registrarU = ()=>{
        registrarUsuario(Usuario).then(()=>{
            alert("se registro")
        }).catch((e)=>{
            console.log(e);
            alert("algo a pasao")
        })
    }

    
    
  return(
    <>
    <h1>Crear Usuario</h1>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type='text' placeholder='ingrese un nombre de usuario'
            name="usuario"
            onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type='password' placeholder='ingrese una contraseña' 
            name="usuario"
            onChange={(e)=>{handleUsuario(e.currentTarget.name,e.currentTarget.value)}}/>
        </Form.Group>
        <Button variant='primary' type='button' onClick={registrarU}>Registrar</Button>
    </Form>

        </>
    )
}
export default Pagina1