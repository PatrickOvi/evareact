import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Trabajador } from "@/Interfaces/ITrabajador";
import { Usuario } from "@/Interfaces/IUsuario";


export const registrarTrabajador = async(trabajador:Trabajador)=>{
    const docRef = await addDoc(collection(db,"trabajadores"),trabajador);
}

export const obtenerTrabajadores = async()=>{
    let trabajadores:Trabajador[] = []
    const querySnapshot = await getDocs(collection(db, "trabajadores"));
    querySnapshot.forEach((doc) => {
        let trabajador:Trabajador = {
            rut:doc.data().rut,
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            fechaIngreso:doc.data().fechaIngreso,
            nombre:doc.data().nombre,
            seccion:doc.data().seccion,
            key:doc.id
        }
        trabajadores.push(trabajador)
    });
    return trabajadores
}
export const obtenerTrabajador = async(key:string)=>{

    const docRef = doc(db,"trabajadores",key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let trabajador:Trabajador = {
            rut:docSnap.data().rut,
            apellido:docSnap.data().apellido,
            correo:docSnap.data().correo,
            fechaIngreso:docSnap.data().fechaIngreso,
            nombre:docSnap.data().nombre,
            seccion:docSnap.data().seccion,
            key:docSnap.id
        }
        return trabajador
    } else {
        return undefined
    }
}

export const actualizarTrabajador = async(p:Trabajador)=>{
    const ref = doc(collection(db,"trabajadores",p.key!))
    await updateDoc(ref,{...p})
}


export const registrarUsuario = async(usuario:Usuario)=>{
    const docRef = await addDoc(collection(db,"usuarios"),usuario);
}