import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trabajador } from '@/Interfaces/ITrabajador'
import { registrarTrabajador } from '@/Firebase/Promesas'



const initialState:Trabajador = {
    nombre:" ",
    apellido:" ",
    rut:" ",
    seccion:" ",
    correo:" ",
    fechaIngreso:" ",
}

export const Pagina3 = ()=>{
    const [Trabajador, setTrabajador] = useState<Trabajador>(initialState)

    const handleTrabajador=(name:string,value:string)=>{
        setTrabajador({...Trabajador,[name]:value})
    }

    const registrar = ()=>{
        registrarTrabajador(Trabajador).then(()=>{
            alert("se registro")
        }).catch((e)=>{
            console.log(e);
            alert("algo a pasao")
        })
    }

  return (
    <>
    {/* nombre,apellido,rut,seccion,correo.fechaIngreso*/}

    <Form>
        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su nombre: ' 
            name="nombre"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su apellido: ' 
            name="apellido"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su rut: ' 
            name="rut"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Seccion de trabajo</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su seccion de trabajo: ' 
            name="seccion"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Form.Control type='email' placeholder='Ingrese su correo: ' 
            name="correo"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Fecha de ingreso</Form.Label>
            <Form.Control type='date' placeholder='Ingrese la fecha que ingreso al trabajo: ' 
            name="fechaIngreso"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Button type='button' variant='success'
            onClick={registrar}>Registrar</Button>
    </Form>
    </>
    )
}
export default Pagina3