import { Button, ButtonGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Pagina2 = ()=>{
    return( 
    <ButtonGroup aria-label="Basic example">
        <Button size="lg" variant="danger" className="pagina2" type="button" href="/Pagina1">Crear Usuario</Button>
        <Button size="lg" variant="danger" className="pagina2" type="button" href="/Pagina3">Control Empleados</Button>
        <Button size="lg" variant="danger" className="pagina2" type="button" href="/Pagina4">Visualizar Datos</Button>
        <Button size="lg" variant="danger" className="pagina2" type='button' href="">Salir</Button>
    </ButtonGroup>
    ) 
}
export default Pagina2