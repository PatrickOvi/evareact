import { Button } from "react-bootstrap"

export const Pagina2 = ()=>{
    return( 
    <div>
        <Button className="pagina2" type="button" href="/Pagina1">Crear Usuario</Button>
        <Button className="pagina2" type="button" href="/Pagina3">Control Empleados</Button>
        <Button className="pagina2" type="button" href="/Pagina4">Visualizar Datos</Button>
        <Button className="pagina2" type='button' href="">Salir</Button>
    </div>
    ) 
}
export default Pagina2