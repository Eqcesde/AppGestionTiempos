
import { registrarTiempos } from "../Controllers/ControllerTiempos.js";
import {listarProyectos, filtrarPorEmpresa, filtarPorProyecto, filtrarPorTipoProyectos} from '../Controllers/ControllerProyectos.js';

let btnRegistrar = document.getElementById('btnRegistrar')
if (btnRegistrar){
    btnRegistrar.addEventListener('click', registrarTiempos)
}

let listaProyectos = document.getElementById('listarProyectos')
if(listaProyectos){
    listaProyectos.addEventListener('click', listarProyectos)
}