
import { actualizarTrabajador, obtenerTrabajador } from '@/Firebase/Promesas'
import { Trabajador } from '@/Interfaces/ITrabajador'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const initialState:Trabajador = {
    nombre:"",
    apellido:"",
    rut:"",
    seccion:"",
    correo:"",
    fechaIngreso:"",
}

export const Pagina5 = () => {
    const router = useRouter()
    const [trabajador, setTrabajador] = useState<Trabajador>(initialState)

    const handleTrabajador=(name:string,value:string)=>{
        setTrabajador({...trabajador,[name]:value})
    }

    useEffect(()=>{
        const key = router.query.key;
        if(key!=undefined && typeof(key)=="string"){
            obtenerTrabajador(key).then((p)=>{
                if(p!=undefined){
                    setTrabajador(p)
                }
                else{
                    //volver a la tabla
                }
            })
        }else{
            //Volver a la tabla
        }

    },[])

    const modificar = ()=>{
        actualizarTrabajador(trabajador).then(()=>{
            alert("Se actualiza con exito")
        })
    }
  return (
    <>
        <Form>
        <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su nombre: '
            value={trabajador.nombre} 
            name="nombre"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su apellido: ' 
            value={trabajador.apellido}
            name="apellido"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su rut: ' 
            value={trabajador.rut}
            name="rut"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Seccion</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su seccion: ' 
            value={trabajador.seccion}
            name="seccion"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Label>Correo</Form.Label>
            <Form.Control type='email' placeholder='Ingrese su correo: ' 
            value={trabajador.correo}
            name="correo"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Fecha de ingreso</Form.Label>
            <Form.Control type='date' placeholder='Ingrese la fecha que ingreso a trabajar: ' 
            value={trabajador.fechaIngreso}
            name="fechaIngreso"
            onChange={(e)=>{handleTrabajador(e.currentTarget.name,e.currentTarget.value)}} />
            <Form.Text></Form.Text>
        </Form.Group>
        <Button type='button' variant='success'
            onClick={modificar}>Modificar</Button>
    </Form>
    </>
  )
}
export default Pagina5