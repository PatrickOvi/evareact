
import { eliminarTrabajador, obtenerTrabajadores } from "@/Firebase/Promesas"
import { Trabajador } from "@/Interfaces/ITrabajador"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router"



export const Pagina4 = ()=>{
    const [trabajadores, setTrabajadores] = useState<Trabajador[]>([])
    useEffect(()=>{
        //Traer listado de trabajadores desde las promesas
        obtenerTrabajadores().then((trabajadores)=>{
            setTrabajadores(trabajadores)
        }).catch((e)=>{
            console.log(e)
            alert("Algo a ocurrido")
        })
        //Meter el listado dentro del estado
        //Renderizar la tabla

    },[])



    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Seccion</th>
                        <th>Correo</th>
                        <th>Fecha de Ingreso</th>
                        <th>Telefono</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trabajadores.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.nombre}</td>
                                    <td>{p.apellido}</td>
                                    <td>{p.rut}</td>
                                    <td>{p.seccion}</td>
                                    <td>{p.correo}</td>
                                    <td>{p.fechaIngreso}</td>
                                    <td>{p.telefono}</td>
                                    <td>{p.sexo}</td>
                                    <td>
                                        <Link href={{pathname:'Pagina5',query:{key:p.key}}}>
                                        <Button variant='warning'>Actualizar</Button>
                                        </Link>
                                        <Button variant='danger'><FaTrashAlt /></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Pagina4